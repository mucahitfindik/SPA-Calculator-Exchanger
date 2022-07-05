import './App.css';
import { useState } from 'react';

import{CurrencyList} from './components/CurrencyList/CurrencyList'

function App() {

  const [selectedCurrency, setSelectedCurrency] = useState([]);

 // const [result, setResult] = useState("")



  /*const onChangeResult = (result)=>{
    setResult(result);
  }*/

  return (
    <div className="App"> 
      <div className="RowContainer">

        <div className="ColumnContainer">
        <CurrencyList selectedCurrency={selectedCurrency} setSelectedCurrency= {setSelectedCurrency}></CurrencyList>
        
        </div>
      </div>
    
    </div>
  );
}

export default App;
