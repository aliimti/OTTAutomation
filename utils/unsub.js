import dotenv from 'dotenv';
dotenv.config();

export async function JobupUnsub(page) {
  await page.getByText('Done').click();
  await page.waitForTimeout(5000);
  await page.locator('//img[@alt="user image"]').click();
  await page.getByRole('link', { name: 'Unsubscribe' }).click();
  await page.waitForTimeout(5000);
}


export async function startalksUnsub(page) {
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.locator('div').filter({ hasText: 'More' }).nth(5).click();
  await page.getByRole('listitem').filter({ hasText: 'Settings' }).click();
  await page.getByRole('link', { name: 'Manage Account' }).click();
  await page.getByRole('button', { name: 'Delete/Unsubscribe' }).click();
  await page.getByRole('button', { name: 'Delete Account' }).click();
  await page.waitForTimeout(5000);
}


export async function GamifiUnsub(page) {
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.locator('img').nth(2).click();
  await page.getByText('Unsubscribe').click();
  await page.waitForTimeout(5000);
}

export async function MaujUnsub(page) {
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('img', { name: 'menu bar' }).click();
  await page.getByText('ProfileProfile+92').click();
  await page.getByText('Subscription Plans').click();
  await page.getByRole('img', { name: 'img' }).nth(1).click();
  await page.getByRole('button', { name: 'Unsubscribe' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Unsubscribe' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.locator('.new__menubar').click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(5000);
}

export async function HidayaUnsub(page) {
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByText('Logged in as').click();
  await page.getByRole('button', { name: 'UNSUBSCRIBE' }).click();
  await page.waitForTimeout(5000);
}

export async function JhoomUnsub(page) {
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('link', { name: 'avatar-header-imgdown-arrow-' }).click();
  await page.getByText('UnSubscribe').click();
  await page.waitForTimeout(5000);
}

export async function ManzilUnsub(page) {
  await page.getByText('Done').click();
  await page.getByRole('button', { name: 'Unsubscribe' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Unsubscribe' }).click();
  await page.waitForTimeout(5000);
}

export async function VouchUnsub(page) {
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: '03XXXXXXXXX' }).fill(process.env.Number);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('button', { name: 'Unsubscribe' }).click();
  await page.getByRole('button', { name: 'Yes, Unsubscribe' }).click();
  await page.waitForTimeout(5000);
}

export async function QuikloUnsub(page) {
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('button').click();
  await page.getByRole('link', { name: 'Unsubscribe' }).click();
  await page.waitForTimeout(3000);
}

export async function SekhoUnsub(page) {
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('link', { name: 'Logged in as' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Unsubscribe' }).locator('a').click();
}

export async function HopshopUnsub(page) {
    await page.goto(process.env.Pannel);
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.PannelUsername);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PannelPassword);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Processed' }).click();
  await page.getByRole('combobox').selectOption('Jazzcash');
  await page.getByRole('combobox').nth(1).selectOption('hopshop');
  await page.getByRole('textbox', { name: 'Enter Service Number' }).fill(process.env.msisdn);
  await page.getByRole('button', { name: 'Deactivate' }).click();
  await page.pause();
}

export async function RungUnsub(page) {
    await page.goto(process.env.Pannel);
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.PannelUsername);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PannelPassword);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Processed' }).click();
  await page.getByRole('combobox').selectOption('Jazzcash');
  await page.getByRole('combobox').nth(1).selectOption('rung');
  await page.getByRole('textbox', { name: 'Enter Service Number' }).fill(process.env.msisdn);
  await page.getByRole('button', { name: 'Deactivate' }).click();
  await page.pause();
}


