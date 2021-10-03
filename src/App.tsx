import React, { useEffect, useState } from 'react';
import './App.css';
import { parse } from './parser';
import recipesRaw from './recipies';
import _ from 'lodash';
import { category } from "./categories";
import { GroceryItem, Recipe, Result } from "./recipe/types";
import { order } from "./order";
import { GroceryTable } from "./GroceryTable";
import { EquipmentList } from "./EquipmentList";

function PlusMinusRow(props: {
  value: number;
  title: string;
  onChange(mod: number): void;
}) {
  return <tr className={props.value > 0 ? 'active' : undefined}>
    <td>{props.title}</td>
    <td align="right">{props.value}</td>
    <td>
      <button onClick={() => props.onChange(-1)}>-</button>
      <button onClick={() => props.onChange(+1)}>+</button>
    </td>
  </tr>
}

const recipes: Recipe[] = parse(recipesRaw.trimStart());

function App() {
  const [count, setCount] = useState(4);
  const [missing, setMissing] = useState<GroceryItem[]>();
  const [basket, setBasket] = useState<{ [recipe: string]: number }>(
    JSON.parse(window.localStorage.getItem("basket") || '{}')
  );
  const [output, setOutput] = useState<string | Result>('');
  useEffect(() => {
    window.localStorage.setItem("basket", JSON.stringify(basket))
  }, [basket]);
  useEffect(() => {
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
    setOutput({
      groceries,
      equipment,
    });
  }, [basket, count])
  const add = (recipe: string, mod: number) => {
    setBasket(b => ({
      ...b,
      [recipe]: Math.max(0, (basket[recipe] || 0) + mod)
    }));
  }
  return <div className="App">
    <div className="noprint">
      <button onClick={() => {
        setBasket({})
      }}>Reset
      </button>
      <table>
        <tbody>
        <PlusMinusRow value={count} title='Osób'
                      onChange={(mod) => setCount(c => Math.max(c + mod, 0))}/>
        {recipes.map(it => it.title).sort().map(it =>
          <PlusMinusRow key={it}
                        value={basket[it] || 0}
                        title={it}
                        onChange={(mod) => add(it, mod)}/>
        )}
        </tbody>
      </table>
    </div>
    {typeof output === "string"
      ? <pre>{output}</pre>
      : <div style={{overflow: 'auto'}}>
        <button onClick={() => order(output.groceries).then(setMissing)}>Zamów</button>
        <GroceryTable values={output.groceries}/>
        <EquipmentList values={output.equipment}/>
        {missing && <>
            <h3>Brakuje:</h3>
            <GroceryTable values={missing}/>
        </>}
      </div>
    }
  </div>
}


export default App;
