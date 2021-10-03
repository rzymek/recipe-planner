import _ from "lodash";
import { parse } from "../parser.js";
import recipesRaw from "../recipies.js";
import { Recipe } from "../recipe/types.js";
import { shop as megasam24 } from "../server/megasam24.js";
import { Shop, ShopEntry, ShopItems, shopItems } from "../server/shop.js";
import fs from "fs";

const recipes: Recipe[] = parse(recipesRaw.trimStart());


function updateShopWithRecipes(shop: Shop): Shop {
  const items = shopItems(shop);

  function toShopItem(item: { text: string, unit: string }): ShopEntry {
    return [item.text, item.unit, items[item.text]?.amount, items[item.text]?.link]
  }

  return _.chain(recipes)
    .flatMap(r => r.ingredients)
    .map(it => ({text: it.text, unit: it.unit}))
    .sortBy(it => it.text)
    .sortedUniqBy(it => it.text)
    .map(toShopItem)
    .value()
}

async function update(shop: Shop, name: string) {
  const src = `
import { Shop } from "./shop";

export const shop:Shop = [
${updateShopWithRecipes(megasam24).map(it => `  ${JSON.stringify(it)},`).join('\n')}
];`.trimStart();
  await fs.writeFileSync(`${__dirname}/../server/${name}.ts`, src);
}

update(megasam24, 'megasam24');
