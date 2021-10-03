import { GroceryItem } from "./recipe/types";
import _ from "lodash";
import { category } from "./categories";
import React from "react";

export function GroceryTable(props: { values: GroceryItem[] }) {
  return <table>
    <tbody>
    {props.values.map(row => <tr key={row.label}>
      <td>{row.label}</td>
      <td style={{textAlign: 'right'}}>{_.round(row.amount, 2)}</td>
      <td>{row.unit}</td>
      <td>{category(row.label)}</td>
    </tr>)}
    </tbody>
  </table>

}
