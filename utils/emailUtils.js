const Imap = require('imap');
const { simpleParser } = require('mailparser');
const dotenv = require('dotenv');

dotenv.config();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

function extractPIN(text) {
  const otpMatch = text.match(
    /Your OTP to link JazzCash account 03088366437 is (\d{6}) /i
  );
  if (otpMatch) {
    return otpMatch[1];
  }

  const fallbackMatch = text.match(
    /Your OTP to link JazzCash account 03088366437 is (\d{6})/i
  );
  return fallbackMatch ? fallbackMatch[1] : null;
}

async function checkEmailsForPINOTT() {
  return new Promise((resolve, reject) => {
    const imap = new Imap({
      user: EMAIL,
      password: PASSWORD,
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
    });

    imap.once('ready', () => {
      imap.openBox('INBOX', false, (err, box) => {
        if (err) return reject(err);
        imap.search(
          [
            'UNSEEN',
            ['UNSEEN', ['SUBJECT', "[SMSFW] New text message from '8558'"]],
          ],
          (err, results) => {
            if (err) return reject(err);
            if (results.length === 0) {
              console.log('No matching SMS forwarder emails found');
              imap.end();
              return resolve(null);
            }
            console.log(
              `Found ${results.length} matching SMS forwarder emails`
            );
            let foundPin = null;
            let messagesProcessed = 0;
            const fetch = imap.fetch(results, { bodies: '', markSeen: true });
            fetch.on('message', (msg, seqno) => {
              msg.on('body', (stream) => {
                let buffer = '';
                stream.on('data', (chunk) => {
                  buffer += chunk.toString('utf8');
                });
                stream.once('end', () => {
                  simpleParser(buffer, (err, mail) => {
                    if (err) return reject(err);
                    console.log('Processing SMS forwarder email');
                    console.log('Email subject:', mail.subject);
                    const emailText = mail.text || '';
                    console.log(
                      'Email content preview:',
                      emailText.substring(0, 200) + '...'
                    );
                    const pin = extractPIN(emailText);
                    if (pin) {
                      console.log(`Found OTP: ${pin}`);
                      foundPin = pin;
                    } else {
                      console.log('No OTP found in email');
                    }
                    messagesProcessed++;
                    if (messagesProcessed === results.length) {
                      imap.end();
                      resolve(foundPin);
                    }
                  });
                });
              });
            });
            fetch.once('error', reject);
          }
        );
      });
    });
    imap.once('error', reject);
    imap.connect();
  });
}

module.exports = {
  extractPIN,
  checkEmailsForPINOTT,
};
