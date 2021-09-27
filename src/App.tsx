import React, { useCallback, useState } from 'react';
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
  }
  equipment: string[]
}

interface Result {
  label: string;
  value: number;
  unit: string;
}

function process(input: string): Result[] | string{
  try {
    const recipes: Recipe[] = parse(input);
    const result = _.chain(recipes)
      .flatMap(r => r.ingredients)
      .groupBy(r => r.text)
      .mapValues(v => ({value: _.sum(v.map(i => i.amount)), unit: v[0]?.unit}))
      .toPairs()
      .map(([label, amount]) => ({label, ...amount}))
      .sortBy(it => it.label)
      .value();
    return result;
  } catch (e) {
    return JSON.stringify(e, null, ' ');
  }
}

const recipesInput = recipesRaw.trimStart();

function App() {
  const [value, setValue] = useState(recipesInput);
  const [output, setOutput] = useState(process(recipesInput));
  const handleChange = useCallback(e => {
    setValue(e.target.value);
    setOutput(process(e.target.value));
  }, [])
  return <div className="App">
    <textarea value={value} onChange={handleChange}/>
    {typeof output === "string"
      ? <pre>{output}</pre>
      : <table style={{overflow: 'auto'}}>
        {output.map(row => <tr key={row.label}>
          <td>{row.label}</td>
          <td>{row.value}</td>
          <td>{row.unit}</td>
        </tr>)}
      </table>
    }
  </div>
}

export default App;
