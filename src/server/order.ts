import { GroceryItem } from "../recipe/types";
import { Builder, By, Key, until } from "selenium-webdriver";


export interface GroceryShopItem extends GroceryItem {
  link: string
  shopAmount: number
  count: number
}

export async function order(items: GroceryShopItem[]) {
  const driver = await new Builder().forBrowser('chrome').build();

  async function clearBasket() {
    await driver.get('https://megasam24.pl/pl/basket');
    await driver.executeScript(`document.querySelectorAll('.quantity input').forEach(it => it.value=0)`)
    await driver.findElement(By.css("#recalc button")).click()
  }

  try {
    await driver.get('https://megasam24.pl/pl/login');
    await driver.findElement(By.id('mail_input_long')).sendKeys('eerzymek@gmail.com');
    await driver.findElement(By.id('pass_input_long')).sendKeys('4Lj#Z%DJiAso$G', Key.RETURN);
    await clearBasket();
    for (const item of items) {
      console.log(item);
      await driver.get(item.link)
      await driver.executeScript(`document.querySelector('input[name="quantity"]').value=${item.count}`);
      await driver.findElement(By.css('.addtobasket > span')).click();
    }
    await driver.get('https://megasam24.pl/pl/basket');
  } finally {
    // await driver.quit();
  }
}
