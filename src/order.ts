import { GroceryItem } from "./recipe/types";

export async function order(items: GroceryItem[]) {
  const response = await fetch("/order", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(items)
  })
}
