import dotenv from 'dotenv';
dotenv.config();
export async function enterPin(page, pinString) {
    const pin = pinString.split(''); 
    const pinInputs = page.locator('input[type="password"]');
    await pinInputs.first().waitFor({ state: 'visible' }); 
    for (let i = 0; i < pin.length; i++) {
        await pinInputs.nth(i).fill(pin[i]);
    }
}

export async function fillNumberIfEmpty(page, numberToFill = process.env.msisdn) {
    const numberInput = page.locator('input.numberinput');
    const currentValue = await numberInput.inputValue();
    if (currentValue === '') {
        console.log('HE not Working. Filling number...');
        await numberInput.fill(numberToFill);       
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
    await mpinContainer.getByRole('textbox', { name: 'OTP Input 1' }).click();
    for (let i = 0; i < pin.length; i++) {
        const inputName = `OTP Input ${i + 1}`; 
        await mpinContainer.getByRole('textbox', { name: inputName }).fill(pin[i]);
    }
}

export async function handleSubscriptionFlow(page, mpinString, waitBeforeMpin = 0) {
    await fillNumberIfEmpty(page);
    await page.pause();
    await ClickConfirm(page);
    if (waitBeforeMpin > 0) {
        await page.waitForTimeout(waitBeforeMpin);
    }
    await enterMpin(page, mpinString);
    await ClickConfirm(page);
}

export async function handleSubscriptionFlow2(page, pinString) {
    await fillNumberIfEmpty(page);
    await page.pause(); 
    await enterPin(page, pinString);
    await ClickConfirm(page);
}