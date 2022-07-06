import { useState, useEffect } from 'react';
import {getHistoryFormula} from '../../services/HistoryService';
import {getResultCalculation} from '../../services/CalculateService'
import Select from 'react-select';
import './FormulaForm.css'
export const FormulaForm = ({result, setResult, currentCurrency, setCurrentCurrency, currencyList}) => {
    
    const [formulaHistoryList, setFormulaHistoryList] = useState([]);
    const [expression, setExpression] = useState({expression:""});
    useEffect(() => {
        getHistoryFormula()
        .then((response) => response.formula_history)
        .then(setFormulaHistoryList)
        
      }, [])

    console.log(formulaHistoryList);
    const handleSubmit = (event) =>{
        getResultCalculation(expression)
        .then((response)=> response.result)
        .then(setResult);
        event.preventDefault();
      }

      const handleSelect = (data) =>{
        console.log(data);
        setCurrentCurrency(data);
       
      };
   /* const handleChange = (event) => {
        setExpression((v) => {
            console.log(v)
            return event.target.validity.valid ? {expression:event.target.value} : v
    })
      };*/
    return(
        <div className="FormulaForm"> 
            <div><h2 style={{ textAlign: "center" }} >Formula Form</h2></div>
            
            <div className = "container">
            <div>
                <Select  style ={{width: '120px'}}
                menuPlacement="auto"
                menuPosition="fixed"
                options={currencyList}
                placeholder="Select currency"
                value={currentCurrency}
                onChange={handleSelect}
                isSearchable={true}
                />
            </div>
            &nbsp;
            <form onSubmit={handleSubmit}>
                <input className = "FormInput"
                type="text" 
                pattern="[0-9 \.\+\-\*\/\(\)]*" 
                value={expression.expression} 
                onChange={(e) =>setExpression((expression) => (e.target.validity.valid ? {expression:e.target.value} : expression))} 
                size="40"/> 
                <p id = "result">={result !== ""&& result}</p>
                <input type="submit" value="Calculate" />
            </form>
            </div>
        </div>
    )
}