import { expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export async function JobupUnsub(page) {
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');
  await page.getByText('Done').click();
  await page.waitForTimeout(5000);
  await page.locator('//img[@alt="user image"]').click();
  await page.getByRole('link', { name: 'Unsubscribe' }).click();
  await page.waitForTimeout(5000);
}

export async function startalksUnsub(page) {
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.locator('div').filter({ hasText: 'More' }).nth(5).click();
  await page.getByRole('listitem').filter({ hasText: 'Settings' }).click();
  await page.getByRole('link', { name: 'Manage Account' }).click();
  await page.getByRole('button', { name: 'Delete/Unsubscribe' }).click();
  await page.getByRole('button', { name: 'Delete Account' }).click();
  await page.waitForTimeout(5000);
}

export async function HidayaUnsub(page) {
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByText('Logged in as').click();
  await page.getByRole('button', { name: 'UNSUBSCRIBE' }).click();
  await page.waitForTimeout(5000);
}

export async function VouchUnsub(page) {
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000);
  await page
    .getByRole('textbox', { name: '03XXXXXXXXX' })
    .fill(process.env.Number);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('button', { name: 'Unsubscribe' }).click();
  await page.getByRole('button', { name: 'Yes, Unsubscribe' }).click();
  await page.waitForTimeout(5000);
}

export async function QuikloUnsub(page) {
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('button').click();
  await page.getByRole('link', { name: 'Unsubscribe' }).click();
  await page.waitForTimeout(3000);
}

export async function SekhoUnsub(page) {
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('link', { name: 'Logged in as' }).click();
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Unsubscribe' })
    .locator('a')
    .click();
}

export async function GamifiUnsub(page) {
  await page.waitForTimeout(3000);
  const response = await page.request.post(
    'https://gamifi.mobi/mapp/jc/unsubscribe',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-auth': 'ht0vy812stv01vcd9R6',
      },
      data: {
        msisdn: 3088366437,
      },
    }
  );
  console.log('Status:', response.status());
  const body = await response.text();
  console.log('Response:', body);
  expect(response.ok()).toBeTruthy();
}

export async function MaujUnsub(page) {
  await page.waitForTimeout(3000);
  const response = await page.request.post(
    'https://mauj.mobi/api/jc/unsubscribe',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-auth': 'ht0vy812stv01vcd9R6',
      },
      data: {
        msisdn: 3088366437,
      },
    }
  );
  console.log('Status:', response.status());
  const body = await response.text();
  console.log('Response:', body);
  expect(response.ok()).toBeTruthy();
}

export async function JhoomUnsub(page) {
  await page.waitForTimeout(3000);
  const response = await page.request.post(
    'https://jhoom.mobi/JhoomApp/api/jc/unsubscribe',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-auth': 'ht0vy812stv01vcd9R6',
      },
      data: {
        msisdn: 3088366437,
      },
    }
  );
  console.log('Status:', response.status());
  const body = await response.text();
  console.log('Response:', body);
  expect(response.ok()).toBeTruthy();
}

export async function ManzilUnsub(page) {
  await page.waitForTimeout(3000);
  const response = await page.request.post(
    'http://manzil.mobi/api/jc/unsubscribe',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-auth': 'ht0vy812stv01vcd9R6',
      },
      data: {
        msisdn: 3088366437,
      },
    }
  );
  console.log('Status:', response.status());
  const body = await response.text();
  console.log('Response:', body);
  expect(response.ok()).toBeTruthy();
}

export async function HopshopUnsub(page) {
  await page.waitForTimeout(3000);
  const response = await page.request.post(
    'https://payments.hopshop.pk/jcms/unsubscribe',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-auth': 'MC3M6373273263732',
      },
      data: {
        msisdn: 3088366437,
      },
    }
  );
  console.log('Status:', response.status());
  const body = await response.text();
  console.log('Response:', body);
  expect(response.ok()).toBeTruthy();
}

export async function RungUnsub(page) {
  await page.waitForTimeout(3000);
  const response = await page.request.get(
    'http://10.227.240.98/Rung/support/unSubscribe',
    {
      params: {
        msisdn: '3088366437',
        channel: 'web',
        password: 'eC0nc3ptLv?dPYr53hau',
      },
    }
  );
  console.log('Status:', response.status());
  const body = await response.text();
  console.log('Response:', body);
  expect(response.ok()).toBeTruthy();
}
