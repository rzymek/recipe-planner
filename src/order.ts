import { GroceryItem } from "./recipe/types";

export async function order(items: GroceryItem[]):Promise<GroceryItem[]> {
  const response = await fetch("/order", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(items)
  })
  const missing = await response.json() as GroceryItem[];
  return missing;
}
