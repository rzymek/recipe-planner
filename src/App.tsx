import React, { useEffect, useState } from 'react';
import './App.css';
import _ from 'lodash';
import { GroceryItem, Result } from "./recipe/types";
import { order } from "./order";
import { GroceryTable } from "./GroceryTable";
import { EquipmentList } from "./EquipmentList";
import { BasketForCount, recipes } from "./CalculateShopping";
import { PlusMinusRow } from "./PlusMinusRow";
import { mergeBaskets } from "./MergeBaskets";

function App() {
  const [current, setCurrent] = useState<BasketForCount>({
    basket: {},
    count: 4,
  });
  const [missing, setMissing] = useState<GroceryItem[]>();
  const [baskets, setBaskets] = useState<BasketForCount[]>([])
  const [output, setOutput] = useState<Result>({
    groceries: [],
    equipment: [],
  });
  useEffect(() => {
    setOutput(mergeBaskets(current, ...baskets));
  }, [current, baskets])
  const add = (recipe: string, mod: number) => {
    setCurrent(c => ({
      count: c.count,
      basket: {
        ...c.basket,
        [recipe]: Math.max(0, (c.basket[recipe] || 0) + mod)
      }
    }));
  }

  function nextList() {
    setBaskets([...baskets, {basket: _.pickBy(current.basket), count: current.count}])
    setCurrent(({count}) => ({count, basket: {}}));
  }

  function removeBasket(idx: number) {
    setBaskets(b => b.filter((value, index) => index !== idx));
  }

  function load(name: string) {
    try {
      if (name === '') {
        setCurrent({basket: {}, count: 4});
        setBaskets([]);
      }
      const data = window.localStorage.getItem(name) || '';
      const {current, baskets} = JSON.parse(data);
      setCurrent(current);
      setBaskets(baskets);
    } catch (e) {
      alert(`${e}`);
    }
  }

  function save() {
    const name = prompt('Nazwa');
    if (!name) {
      return;
    }
    window.localStorage.setItem(name, JSON.stringify({current, baskets}))
  }

  return <div className="App">
    <div>
      <div className="noprint">
        <select onChange={e => load(e.target.value)}>
          <option value=''>Otwórz...</option>
          {Object.keys(window.localStorage).map(key =>
            <option value={key} key={key}>{key}</option>
          )}
        </select>
        <button onClick={() => save()}>Zapisz</button>
        <button onClick={nextList}>Kolejne</button>
        <table>
          <tbody>
          <PlusMinusRow value={current.count} title='Osób'
                        onChange={(mod) => setCurrent(c => ({...c, count: Math.max(c.count + mod, 0)}))}/>
          {recipes.map(it => it.title).sort().map(it =>
            <PlusMinusRow key={it}
                          value={current.basket[it] || 0}
                          title={it}
                          onChange={(mod) => add(it, mod)}/>
          )}
          </tbody>
        </table>
      </div>
      <ul>
        {baskets.map((b, idx) => <li>
          <button className="noprint" onClick={() => removeBasket(idx)}>X</button>
          Osób {b.count}: {_.toPairs(b.basket).map(([recipe, count]) => `${recipe} (${count})`).join(", ")}
        </li>)}
      </ul>
    </div>
    <div style={{overflow: 'auto'}}>
      <div className="noprint">
        <button onClick={() => order(output.groceries).then(setMissing)}>Zamów</button>
      </div>
      <GroceryTable values={output.groceries}/>
      <EquipmentList values={output.equipment}/>
      {missing && <>
          <h3>Brakuje:</h3>
          <GroceryTable values={missing}/>
      </>}
    </div>
  </div>
}


export default App;
