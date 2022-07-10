import { useState, useEffect } from 'react';
import {getHistoryFormula} from '../../services/HistoryService';
import {getResultCalculation} from '../../services/CalculateService'
import Select from 'react-select';
import AutoSuggest from "react-autosuggest";
import './FormulaForm.css'
export const FormulaForm = ({result, setResult, currentCurrency, setCurrentCurrency, currencyList}) => {
    
    const [formulaHistoryList, setFormulaHistoryList] = useState([]);
    const [expression, setExpression] = useState({expression:""});
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const fetchHistoryFormula = async()=>{
          const response = await getHistoryFormula();
          setFormulaHistoryList(response.formula_history)
        }
        fetchHistoryFormula();   
      }, [])
    const handleSubmit = (event) =>{
        getResultCalculation(expression)
        .then((response)=> response.result)
        .then(setResult);
        event.preventDefault();
      }

      const handleSelect = (data) =>{
        setCurrentCurrency(data);
       
      };
   /* const handleChange = (event) => {
        setExpression((v) => {
            console.log(v)
            return event.target.validity.valid ? {expression:event.target.value} : v
    })
      };*/
    const getSuggestions = (value) => {
      return formulaHistoryList.filter(exp =>
        exp.expression.includes(value.trim())
      );
    }
    const onSuggestionsFetchRequested=( {value}) => {
      if (!/^[0-9\.\+\-\*\/\(\)]*$/.test(value)){
        value = expression.expression;
      }
      value = value.trim()
      setExpression({expression:value});
      setSuggestions(getSuggestions(value))
    }
    const getSuggestionValue =(suggestion) =>{
      setResult(suggestion.result);
      return suggestion.expression
    }
    const onChange = (event, { newValue, method }) => {
      setExpression({expression:newValue});
    };
    
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
            <AutoSuggest
              suggestions={suggestions}
              onSuggestionsClearRequested={() => setSuggestions([])}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={suggestion => <span>{suggestion.expression}</span>}
              inputProps={{
                placeholder: "Please enter your formula",
                value: expression.expression,
                onChange: (_, { newValue, method }) => {

                  setExpression({expression:newValue});
                }
              }}
              highlightFirstSuggestion={true}
            />
                <p id = "result">={result !== ""&& result}</p>
                <input type="submit" value="Calculate" />
            </form>
            </div>
        </div>
    )
}