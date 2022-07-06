import './App.css';
import { useState } from 'react';

import{CurrencyList} from './components/CurrencyList/CurrencyList'
import{FormulaForm} from './components/FormulaForm/FormulaForm'
function App() {

  const [selectedCurrency, setSelectedCurrency] = useState([]);
  const [currencyList, setCurrencyList] = useState([])
  const [result, setResult] = useState("")
  const [currentCurrency, setCurrentCurrency]=useState("")



  /*const onChangeResult = (result)=>{
    setResult(result);
  }*/

  return (
    <div className="App"> 
      <div className="RowContainer">

        <div className="ColumnContainer">
        <FormulaForm  result={result} setResult= {setResult} currentCurrency={currentCurrency} setCurrentCurrency= {setCurrentCurrency} currencyList= {currencyList} ></FormulaForm>
        <CurrencyList selectedCurrency={selectedCurrency} setSelectedCurrency= {setSelectedCurrency} currencyList= {currencyList} setCurrencyList= {setCurrencyList}></CurrencyList>
        
        </div>
      </div>
    
    </div>
  );
}

export default App;
