import { checkEmailsForPINOTT } from '../utils/emailUtils.js';
import dotenv from 'dotenv';
dotenv.config();
export async function enterPin(page, pinString) {
  const pin = pinString.split('');
  const pinInputs = page.locator('input[type="password"]');
  for (let i = 0; i < pin.length; i++) {
    await pinInputs.nth(i).fill(pin[i]);
  }
}

export async function fillNumberIfEmpty(
  page,
  numberToFill = process.env.msisdn
) {
  const numberInput = page.locator('input.numberinput');
  const currentValue = await numberInput.inputValue();
  await page.waitForTimeout(3000);
  if (currentValue === '') {
    console.log('HE not Working. Filling number...');
    await numberInput.fill(numberToFill);
    const realBtn = page.getByRole('button', { name: /Subscribe|Continue/ });

    // Div wale button dhoondne ke liye (jahan <div> tag use hua hai)
    const divBtn = page.locator('div.landingJC--default--btn, div.blue-btn');

    // Jo dono mein se mojood ho, uspe click kar do
    await realBtn.or(divBtn).click();
    // await page.getByText(/Subscribe|Continue/).click();
  } else {
    console.log(`HE Working with: ${currentValue}. Continuing...`);
  }
}

export async function ClickConfirm(page) {
  await page.getByRole('button', { name: 'Confirm' }).click();
}
export async function enterMpin(page, pinString) {
  const pin = pinString.split('');
  const mpinContainer = page.locator('#mpin-input');
  for (let i = 0; i < pin.length; i++) {
    const inputName = `OTP Input ${i + 1}`;
    await mpinContainer.getByRole('textbox', { name: inputName }).fill(pin[i]);
  }
}

export async function handleSubscriptionFlow(page, mpinString) {
  await fillNumberIfEmpty(page);
  await OTPFill1(page);
  await ClickConfirm(page);
  await enterMpin(page, mpinString);
  await ClickConfirm(page);
}

export async function handleSubscriptionFlow2(page, pinString) {
  await fillNumberIfEmpty(page);
  await fetchAndEnterOTP(page);
  await enterPin(page, pinString);
  await ClickConfirm(page);
}

export async function OTPFill1(page, pinString) {
  let otp = null;
  await page.waitForTimeout(15000);
  const maxRetries = 6;
  for (let i = 0; i < maxRetries; i++) {
    otp = await checkEmailsForPINOTT();
    if (otp) break;
    console.log(`Waiting for OTP... attempt ${i + 1}/${maxRetries}`);
    await page.waitForTimeout(5000);
  }

  if (!otp) {
    throw new Error('No valid OTP received in time');
  }
  console.log(`OTP to use for Subscription: ${otp}`);
  const sixDigitOtp = otp.substring(0, 6);
  const firstOtpInput = page.getByRole('textbox', { name: 'OTP Input 1' });
  await firstOtpInput.click();
  await firstOtpInput.pressSequentially(sixDigitOtp);
  console.log('OTP successfully entered');
}

export async function fetchAndEnterOTP(page) {
  let otp = null;
  await page.waitForTimeout(15000);

  const maxRetries = 6;
  for (let i = 0; i < maxRetries; i++) {
    otp = await checkEmailsForPINOTT();
    if (otp) break;
    console.log(`Waiting for OTP... attempt ${i + 1}/${maxRetries}`);
    await page.waitForTimeout(5000);
  }
  if (!otp) {
    throw new Error('No valid OTP received in time');
  }
  console.log(`OTP to use for Subscription: ${otp}`);

  const digits = otp.substring(0, 6).split('');

  const otpBoxes = page.locator('.otp-box');

  for (let i = 0; i < digits.length; i++) {
    await otpBoxes.nth(i).fill(digits[i]);
  }
  console.log('OTP successfully entered');
}
