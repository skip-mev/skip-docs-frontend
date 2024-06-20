import { Page } from "@playwright/test";

export async function importKeplrAccount(
  page: Page,
  extensionId: string,
  mnemonic: string[]
) {
  // go to keplrs register page
  await page.goto(`chrome-extension://${extensionId}/popup.html#/register`);

  await page.getByText("Import existing account").click();

  // our mnemonic is 24 words, so select that option in the dropdown
  await page.getByRole("button", { name: "12 words" }).click();
  await page.getByRole("menuitem", { name: "24 words" }).click();

  // focus the first mnumonic word input
  await page.getByRole("textbox").first().focus();

  // type in the mnemonic words
  for (const word of mnemonic) {
    await page.keyboard.type(word);
    await page.keyboard.press("Tab");
  }

  // username
  await page.keyboard.type("Test");
  await page.keyboard.press("Tab");

  // password
  await page.keyboard.type("Password123");
  await page.keyboard.press("Tab");

  // confirm password
  await page.keyboard.type("Password123");
  await page.keyboard.press("Tab");

  // submit
  await page.getByRole("button", { name: "Next" }).click();
}

export async function importKeplrAccountWithPrivateKey(
  page: Page,
  extensionId: string,
  key: string
) {
  // go to keplrs register page
  await page.goto(`chrome-extension://${extensionId}/popup.html#/register`);

  await page.getByText("Import existing account").click();

  // select private key from dropdown
  await page.getByRole("button", { name: "12 words" }).click();
  await page.getByRole("menuitem", { name: "Private key" }).click();

  // focus the first mnumonic word input
  await page.getByRole("textbox").first().focus();

  await page.keyboard.type(key);
  await page.keyboard.press("Tab");

  // username
  await page.keyboard.type("Test");
  await page.keyboard.press("Tab");

  // password
  await page.keyboard.type("Password123");
  await page.keyboard.press("Tab");

  // confirm password
  await page.keyboard.type("Password123");
  await page.keyboard.press("Tab");

  // submit
  await page.getByRole("button", { name: "Next" }).click();
}
