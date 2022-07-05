import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {getCurrencyList} from './services/CurrencyListService';
import{CurrencyList} from './components/CurrencyList'

function App() {
  const [currencyList, setCurrencyList] = useState([])

  useEffect(() => {
    getCurrencyList()
    .then((response) => response.currency_list)
    .then((list) =>
      Object.entries(list).map((currency)=>({ ...currency, selected: false })))
    .then(setCurrencyList)
    
  }, [])

  return (
    <div className="App"> 
      <div className="RowContainer">

        <div className="ColumnContainer">
        <CurrencyList currencyList={currencyList}></CurrencyList>
        </div>
      </div>
    
    </div>
  );
}

export default App;
