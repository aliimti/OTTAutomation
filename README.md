# OTT Services Subscription & Unsubscription Automation Testing

This project automates testing for OTT (Over-The-Top) services subscription and unsubscription flows using Playwright.

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- A **Google Account** with 2-Step Verification enabled (for Gmail automation)
- Valid **phone number** and **MSISDN** for testing

## 🚀 Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

## ⚙️ Configuration

### Setup .env File

Create or update the `.env` file in the root directory with the following variables:

```env
# Phone Numbers
Number=<YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE>
msisdn=<YOUR_PHONE_NUMBER_WITHOUT_COUNTRY_CODE>

# Gmail Credentials
EMAIL=<YOUR_GMAIL_ADDRESS>
PHONE=<YOUR_PHONE_NUMBER_WITHOUT_COUNTRY_CODE>
PASSWORD=<YOUR_GOOGLE_APP_PASSWORD>
```

### Configuration Variables Explained

| Variable     | Description                                           | Example                |
| ------------ | ----------------------------------------------------- | ---------------------- |
| **Number**   | Full phone number with country code                   | `03088366437`          |
| **msisdn**   | Phone number without country code (10 digits)         | `3088366437`           |
| **EMAIL**    | Your Gmail address used for automation                | `your-email@gmail.com` |
| **PHONE**    | Phone number without country code                     | `3088366437`           |
| **PASSWORD** | Google App Password (NOT your regular Gmail password) | `xxxx xxxx xxxx xxxx`  |

## 🔑 Generating Google App Password

Since Gmail has disabled "Less secure app access", you need to use an **App Password** instead of your regular Gmail password.

### Step-by-Step Guide:

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Click on "2-Step Verification"
   - Follow the prompts to set it up

2. **Generate App Password**:
   - Go to [Google Account](https://myaccount.google.com/apppasswords)
   - Select "Mail" from the app dropdown
   - Select "Windows Computer" (or your device) from the device dropdown
   - Click "Generate"
   - Google will display a 16-character password
   - Copy this password and paste it in the `.env` file as `PASSWORD`
   - The format is typically: `xxxx xxxx xxxx xxxx` (spaces included, or without)

3. **Update .env File**:
   ```env
   EMAIL=your-email@gmail.com
   PASSWORD=knnktgqddunzvulm
   ```

## � SMS Forwarder Setup

To capture SMS messages during testing, you need to set up SMS Forwarder on your mobile device:

### Installation & Configuration:

1. **Download SMS Forwarder App**:
   - Download "SMS Forwarder" app on your Android mobile device
   - Install the app from Google Play Store
   - [SMS Forwarder on Google Play Store](https://play.google.com/store/apps/details?id=com.tgapps.smsforwarder)

2. **Configure Email Filter**:
   - Open the SMS Forwarder app
   - Tap on **"Filters"** or **"Rules"**
   - Click **"Add New Filter"** or **"+"** button
   - Set up the filter to forward SMS to your email

3. **Add Project Email**:
   - In the filter settings, add the email address you configured in `.env`:
     ```
     EMAIL=your-email@gmail.com
     ```
   - This email will receive SMS notifications during the subscription/unsubscription tests
   - Enable the filter to start forwarding messages

4. **Grant Permissions**:
   - Grant SMS read permissions
   - Grant notification access
   - Grant call log access (if required)
   - Enable in accessibility settings

### Why This is Needed:

The automation tests use SMS notifications as part of the OTT subscription verification process. SMS Forwarder ensures that test SMS messages are sent to your Gmail account where they can be accessed and verified by the automation scripts.

## �📁 Project Structure

```
OTT/
├── tests/                 # Test files
│   └── OTT_Sub_Unsub.spec.js
├── utils/                 # Utility functions
│   ├── emailUtils.js      # Email handling
│   ├── helpers.js         # Helper functions
│   └── unsub.js           # Unsubscription utilities
├── playwright-report/     # Test reports
├── .env                   # Environment configuration (DO NOT COMMIT)
├── package.json           # Project dependencies
├── playwright.config.js   # Playwright configuration
└── README.md              # This file
```

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (see browser):

```bash
npx playwright test --headed
```

Run specific test file:

```bash
npx playwright test tests/OTT_Sub_Unsub.spec.js
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

View test report:

```bash
npx playwright show-report
```

## ⚠️ Important Notes

- **Never commit the `.env` file** to version control (it contains sensitive credentials)
- Ensure your `.gitignore` includes `.env`:
  ```
  .env
  .env.local
  ```
- The `MSISDN` should be a valid Pakistani phone number (10 digits without country code)
- The `Number` should include the country code (typically `03` for Pakistan)
- Google App Password is different from your regular Gmail password and is specifically for app access

## 🧪 Test Coverage

This automation tests:

- ✅ OTT Services subscription flow
- ✅ OTT Services unsubscription flow
- ✅ Email verification processes
- ✅ Multi-platform OTT services (Vouch365, Mauj, Jobup, Startalks, Rung, etc.)

## 📝 Troubleshooting

### Password Authentication Failed

- Ensure you're using an **App Password**, not your regular Gmail password
- Verify 2-Step Verification is enabled
- Generate a new App Password if needed

### Phone Number Issues

- Verify the phone number format is correct
- Ensure `msisdn` is exactly 10 digits without country code
- Ensure `Number` includes the full country code prefix

### Email Not Received

- Check spam/promotions folder
- Verify the Gmail account has proper app password permissions
- Ensure credentials in `.env` are correct

## 📞 Support

For issues or questions about the test automation, refer to:

- [Playwright Documentation](https://playwright.dev/)
- [Gmail App Passwords Help](https://support.google.com/accounts/answer/185833)

---

**Version**: 1.0.0
