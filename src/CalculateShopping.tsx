import { Recipe, Result } from "./recipe/types";
import _ from "lodash";
import { category } from "./categories";
import { parse } from "./parser";
import recipesRaw from "./recipies";

export const recipes: Recipe[] = parse(recipesRaw.trimStart());

export interface Basket {
  [recipe: string]: number,
}

export interface BasketForCount {
  basket: Basket,
  count: number,
}

export function calculateShopping(input: BasketForCount): Result {
  const {basket, count} = input;
  const filtered = _.chain(recipes)
    .filter(r => basket[r.title] > 0);
  const groceries = filtered
    .map(r => ({
      ...r,
      ingredients: r.ingredients.map(i => ({
        ...i,
        amount: i.amount * basket[r.title]
      }))
    }))
    .flatMap(r => r.ingredients)
    .groupBy(r => r.text)
    .mapValues(v => ({
      value: _.sum(v.map(i => i.amount)),
      unit: _.chain(v).map(i => i.unit).uniq().join('!=').value(),
    }))
    .toPairs()
    .map(([label, amount]) => ({
      label,
      amount: amount.value * count,
      unit: amount.unit
    }))
    .sortBy(it => [category(it.label), it.label])
    .value();
  const equipment = filtered.flatMap(it => it.equipment).sort().sortedUniq().value();
  return {groceries, equipment};
}
