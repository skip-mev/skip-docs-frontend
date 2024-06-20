import { test } from "./fixtures";
import {
  importKeplrAccount,
  importKeplrAccountWithPrivateKey,
} from "./helpers";
import { VALIDATOR_KEYS } from "./keys";

for (const validator of Object.values(VALIDATOR_KEYS)) {
  test(`can register ${validator.network}`, async ({
    page,
    extensionId,
    context,
  }) => {
    if (validator.mnemonic) {
      await importKeplrAccount(page, extensionId, validator.mnemonic);
    } else if (validator.privateKey) {
      await importKeplrAccountWithPrivateKey(
        page,
        extensionId,
        validator.privateKey
      );
    }

    // go to registration page
    await page.goto("/registration");

    // select proper network from dropdown
    await page.getByRole("button", { name: "Juno Mainnet" }).click();
    await page.getByRole("option", { name: validator.network }).click();

    let popupPromise = context.waitForEvent("page");

    await page.getByRole("button", { name: "Sign with Keplr" }).click();

    await page.waitForTimeout(1000);

    let popup = await popupPromise;

    await popup.waitForLoadState();

    popupPromise = context.waitForEvent("page");

    await popup
      .getByRole("button", { name: "Approve", disabled: false })
      .click();

    popup = await popupPromise;

    await popup.waitForLoadState();

    popupPromise = context.waitForEvent("page");

    await popup
      .getByRole("button", { name: "Approve", disabled: false })
      .click();

    popup = await popupPromise;

    await popup.waitForLoadState();

    await popup
      .getByRole("button", { name: "Approve", disabled: false })
      .click();

    // if successful, we should be redirected to the settings page
    await page.waitForURL("/settings");
  });
}
