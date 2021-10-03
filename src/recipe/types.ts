export interface Recipe {
  title: string;
  ingredients: {
    text: string;
    amount: number;
    unit: string;
  }[]
  equipment: string[]
}

export interface Result {
  groceries: GroceryItem[];
  equipment: string[];
}

export interface GroceryItem {
  label: string;
  amount: number;
  unit: string;
}
