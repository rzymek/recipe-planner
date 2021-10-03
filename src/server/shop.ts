export type ShopEntry = [string, string, number?, string?];
export type Shop = ShopEntry[];

export interface ShopItems {
  [label: string]: {
    amount: number,
    link: string
  }
}

export function shopItems(shop: Shop): ShopItems {
  return shop
    .map(([title, unit, amount, link]) => ({title, unit, amount, link}))
    .reduce((result, item) => ({
      ...result,
      [item.title]: {
        amount: item.amount,
        link: item.link
      }
    }), {});
}
