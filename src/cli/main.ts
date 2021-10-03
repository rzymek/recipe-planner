import _ from "lodash";
import { parse } from "../parser.js";
import recipesRaw from "../recipies.js";
import { Recipe } from "../recipe/types.js";
import { megasam24 } from "../server/megasam24.js";
import { Shop, ShopEntry, shopItems } from "../server/shop.js";

const recipes: Recipe[] = parse(recipesRaw.trimStart());

const items = shopItems(megasam24);

function updateShopWithRecepies(): Shop {
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

console.log(
`import { Shop } from "./shop";

export const megasam24: Shop = [
${updateShopWithRecepies().map(it=>`  ${JSON.stringify(it)},`).join('\n')}
];`
);
