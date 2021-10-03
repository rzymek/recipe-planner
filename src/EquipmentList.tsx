import React from "react";

export function EquipmentList(props: { values: string[] }) {
  return <ul>
    {props.values.map(row =>
      <li key={row}>{row}</li>
    )}
  </ul>
}
