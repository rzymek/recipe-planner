import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { parse } from './parser';
import recipesRaw from './recipies';
import _ from 'lodash';

interface Recipe {
  title: string;
  ingredients: {
    text: string;
    amount: number;
    unit: string;
  }[]
  equipment: string[]
}

interface Result {
  label: string;
  amount: number;
  unit: string;
}

function PlusMinusRow(props: {
  value: number;
  title: string;
  onChange(mod: number): void;
}) {
  return <tr>
    <td>{props.title}</td>
    <td>{props.value}</td>
    <td>
      <button onClick={() => props.onChange(-1)}>-</button>
      <button onClick={() => props.onChange(+1)}>+</button>
    </td>
  </tr>
}


// function process(input: string): Result[] | string {
//   try {
//     const recipes: Recipe[] = parse(input);
//     const result = _.chain(recipes)
//       .flatMap(r => r.ingredients)
//       .groupBy(r => r.text)
//       .mapValues(v => ({value: _.sum(v.map(i => i.amount)), unit: v[0]?.unit}))
//       .toPairs()
//       .map(([label, amount]) => ({label, ...amount}))
//       .sortBy(it => it.label)
//       .value();
//     return result;
//   } catch (e) {
//     return JSON.stringify(e, null, ' ');
//   }
// }

const recipes: Recipe[] = parse(recipesRaw.trimStart());

function App() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(4);
  const [basket, setBasket] = useState<{ [recipe: string]: number }>({});
  const [output, setOutput] = useState<string | Result[]>('');
  useEffect(() => {
    const result = _.chain(recipes)
      .filter(r => basket[r.title] > 0)
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
        unit: _.chain(v).map(i=>i.unit).uniq().join('/').value(),
      }))
      .toPairs()
      .map(([label, amount]) => ({
        label,
        amount: amount.value * count,
        unit: amount.unit
      }))
      .sortBy(it => it.label)
      .value();
    setOutput(result);
  }, [basket, count])
  const add = (recipe: string, mod: number) => {
    setBasket(b => ({
      ...b,
      [recipe]: Math.max(0, (basket[recipe] || 0) + mod)
    }));
  }
  return <div className="App">
    <div>
      <table style={{width: '100%'}}>
        <PlusMinusRow value={count} title='Osób'
                      onChange={(mod) => setCount(c => Math.max(c + mod, 0))}/>
        {recipes.map(it => it.title).sort().map(it =>
          <PlusMinusRow value={basket[it] || 0} title={it} onChange={(mod) => add(it, mod)}/>
        )}
      </table>
    </div>
    {typeof output === "string"
      ? <pre>{output}</pre>
      : <div>
        <table style={{overflow: 'auto', width: '100%'}}>
          {output.map(row => <tr key={row.label}>
            <td>{row.label}</td>
            <td>{_.round(row.amount, 2)}</td>
            <td>{row.unit}</td>
          </tr>)}
        </table>
      </div>
    }
  </div>
}

export default App;
