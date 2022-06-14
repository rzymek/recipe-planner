import { BasketForCount, calculateShopping } from "./CalculateShopping";
import _ from "lodash";
import { GroceryItem } from "./recipe/types";
import { category } from "./categories";


function uniqSorted<T>(param: T[]): T[] {
  return _.sortedUniq(param.sort());
}

function mergeGroceries(a: GroceryItem[], b: GroceryItem[]): GroceryItem[] {
  const amountByLabel = (list: GroceryItem[], label: string) => list.find(it => it.label === label)?.amount || 0;

  const uniq = _.uniqBy([...a, ...b], it => it.label)
  return _.sortBy(uniq.map(({label, unit}) => ({
    amount: amountByLabel(a, label) + amountByLabel(b, label),
    label,
    unit,
  })), it=>[category(it.label), it.label]);
}

export function mergeBaskets(...baskets: BasketForCount[]) {
  return baskets
    .map(list => calculateShopping(list))
    .reduce((result, entry) => ({
      groceries: mergeGroceries(result.groceries, entry.groceries),
      equipment: uniqSorted([...result.equipment, ...entry.equipment]),
    }), {
      groceries: [],
      equipment: [],
    });
}
