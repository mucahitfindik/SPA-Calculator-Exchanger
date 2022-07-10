import './App.css';
import { useState } from 'react';

import{CurrencyList} from './components/CurrencyList/CurrencyList'
import{FormulaForm} from './components/FormulaForm/FormulaForm'
import{DisplayExchangeResult} from './components/DisplayExchangeResult/DisplayExchangeResult'

import {getResultExchange} from './services/ExchangeService'
function App() {

  const [selectedCurrency, setSelectedCurrency] = useState([]);
  const [currencyList, setCurrencyList] = useState([])
  const [result, setResult] = useState("")
  const [currentCurrency, setCurrentCurrency]=useState("")
  const [boardResult, setBoardResult]=useState([])

  const exchange = ()=>{
    getResultExchange(result, selectedCurrency, currentCurrency.label, new Date(Date.now()).toISOString().split('T')[0])
    .then(setBoardResult)
  }

  /*const onChangeResult = (result)=>{
    setResult(result);
  }*/

  return (
    <div className="App"> 
      <div className="RowContainer">

        <div className="ColumnContainer">
        <FormulaForm  result={result} setResult= {setResult} currentCurrency={currentCurrency} setCurrentCurrency= {setCurrentCurrency} currencyList= {currencyList} ></FormulaForm>
        <CurrencyList selectedCurrency={selectedCurrency} setSelectedCurrency= {setSelectedCurrency} currencyList= {currencyList} setCurrencyList= {setCurrencyList} exchange={exchange}></CurrencyList>
        
        </div>
        <DisplayExchangeResult boardResult={boardResult}/>
      </div>
    
    </div>
  );
}

export default App;
