import React, { useEffect, useState } from 'react';
import './App.css';
import _ from 'lodash';
import { GroceryItem, Result } from "./recipe/types";
import { order } from "./order";
import { GroceryTable } from "./GroceryTable";
import { EquipmentList } from "./EquipmentList";
import { Basket, BasketForCount, recipes } from "./CalculateShopping";
import { PlusMinusRow } from "./PlusMinusRow";
import { mergeBaskets } from "./MergeBaskets";


function App() {
  const [count, setCount] = useState(4);
  const [missing, setMissing] = useState<GroceryItem[]>();
  const [baskets, setBaskets] = useState<BasketForCount[]>([])
  const [basket, setBasket] = useState<Basket>({});
  const [output, setOutput] = useState<Result>({
    groceries: [],
    equipment: [],
  });
  useEffect(() => {
    setOutput(mergeBaskets({basket, count}, ...baskets));
  }, [basket, count])
  const add = (recipe: string, mod: number) => {
    setBasket(b => ({
      ...b,
      [recipe]: Math.max(0, (basket[recipe] || 0) + mod)
    }));
  }

  function nextList() {
    setBaskets([...baskets, {basket: _.pickBy(basket ), count}])
    setBasket({});
  }

  function removeBasket(idx: number) {
    setBaskets(b => b.filter((value, index) => index != idx));
  }

  return <div className="App">
    <div className="noprint">
      <button onClick={() => setBasket({})}>Reset</button>
      <button onClick={nextList}>Kolejne</button>
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
      <ul>
        {baskets.map((b, idx) => <li>
          <button onClick={() => removeBasket(idx)}>X</button>
          Osób {b.count}: {_.toPairs(b.basket).map(([recipe, count]) => `${recipe} (${count})`).join(", ")}
        </li>)}
      </ul>
    </div>
    <div style={{overflow: 'auto'}}>
      <button onClick={() => order(output.groceries).then(setMissing)}>Zamów</button>
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
