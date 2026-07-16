import { test, expect } from '@playwright/test';
import {
  enterPin,
  ClickConfirm,
  enterMpin,
  fillNumberIfEmpty,
  handleSubscriptionFlow,
  handleSubscriptionFlow2,
  OTPFill1,
} from '../utils/helpers.js';
import {
  JobupUnsub,
  startalksUnsub,
  GamifiUnsub,
  MaujUnsub,
  HidayaUnsub,
  JhoomUnsub,
  ManzilUnsub,
  VouchUnsub,
  QuikloUnsub,
  SekhoUnsub,
  HopshopUnsub,
  RungUnsub,
} from '../utils/unsub.js';
import dotenv from 'dotenv';
dotenv.config();

test('Jobup subscription and unsubscribe flow', async ({ page }) => {
  console.log('Jobup');
  await page.goto(process.env.Jobup);
  await handleSubscriptionFlow(page, '3078');
  console.log(process.env.Sub);
  await JobupUnsub(page);
  console.log(process.env.Unsub);
});

test('Startalks subscription and unsubscribe flow', async ({ page }) => {
  console.log('Startalks');
  await page.goto(process.env.Startalks);
  await page.waitForTimeout(3000);
  await handleSubscriptionFlow(page, '3078');
  console.log(process.env.Sub);
  await startalksUnsub(page);
  console.log(process.env.Unsub);
});

test('Gamifi subscription and unsubscribe flow', async ({ page }) => {
  console.log('Gamify');
  await page.goto(process.env.Gamifi);
  await handleSubscriptionFlow2(page, '3078');
  console.log(process.env.Sub);
  await GamifiUnsub(page);
  console.log(process.env.Unsub);
});

test('Mauj subscription and unsubscribe flow', async ({ page }) => {
  console.log('Mauj');
  await page.goto(process.env.Mauj);
  await handleSubscriptionFlow2(page, '3078');
  console.log(process.env.Sub);
  await MaujUnsub(page);
  console.log(process.env.Unsub);
});

test('Hidaya subscription and unsubscribe flow', async ({ page }) => {
  console.log('Hidaya');
  await page.goto(process.env.Hidaya);
  await handleSubscriptionFlow2(page, '3078');

  console.log(process.env.Sub);
  await HidayaUnsub(page);
  console.log(process.env.Unsub);
});

test('Jhoom subscription and unsubscribe flow', async ({ page }) => {
  console.log('Jhoom');
  await page.goto(process.env.Jhoom);
  await handleSubscriptionFlow2(page, '3078');
  console.log(process.env.Sub);
  await JhoomUnsub(page);
  console.log(process.env.Unsub);
});

test('Manzil subscription and unsubscribe flow', async ({ page }) => {
  console.log('Manzil');
  await page.goto(process.env.Manzil);
  await handleSubscriptionFlow2(page, '3078');
  console.log(process.env.Sub);
  await ManzilUnsub(page);
  console.log(process.env.Unsub);
});

test('Vouch subscription and unsubscribe flow', async ({ page }) => {
  console.log('Vouch');
  await page.goto(process.env.Vouch365);
  await handleSubscriptionFlow2(page, '3078');
  await page.waitForTimeout(3000);
  console.log(process.env.Sub);
  await VouchUnsub(page);
  console.log(process.env.Unsub);
});

test('Quiklo subscription and unsubscribe flow', async ({ page }) => {
  console.log('Quiklo');
  await page.goto(process.env.Quiklo);
  await handleSubscriptionFlow2(page, '3078');
  await QuikloUnsub(page);
  console.log(process.env.Sub);
});

test('Sekho subscription and unsubscribe flow', async ({ page }) => {
  console.log('Sekho');
  await page.goto(process.env.Sekho);
  await handleSubscriptionFlow2(page, '3078');
  await SekhoUnsub(page);
  console.log(process.env.Sub);
});

test('Hopshop subscription and unsubscribe flow', async ({ page }) => {
  console.log('Hopshop');
  await page.goto(process.env.Hopshop);
  await handleSubscriptionFlow2(page, '3078');
  await page.getByRole('button', { name: 'Proceed' }).click();
  console.log(process.env.Sub);
  await HopshopUnsub(page);
  console.log(process.env.Unsub);
});

test('Rung subscription and unsubscribe flow', async ({ page }) => {
  console.log('Rung');
  await page.goto(process.env.Rung);
  await handleSubscriptionFlow(page, '3078');
  await page.getByRole('button', { name: 'Proceed' }).click();
  console.log(process.env.Sub);
  await RungUnsub(page);
  console.log(process.env.Unsub);
});
