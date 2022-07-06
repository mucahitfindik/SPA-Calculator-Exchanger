import { useEffect } from 'react';
import {getCurrencyList} from '../../services/CurrencyListService';
import './CurrencyList.css'
export const CurrencyList = ({selectedCurrency, setSelectedCurrency, currencyList, setCurrencyList}) => {

    useEffect(() => {
        getCurrencyList()
        .then((response) => response.currency_list)
        .then((list) =>
          Object.entries(list).map((currency)=>({ label:currency[0], value:currency[1], selected: false })))
        .then((x)=>setCurrencyList(x))
        
      }, [])

    console.log(currencyList);

    if (currencyList.length === 0) return null

    const CurrencyRow = (currency, index) => {
        return(
              <tr key={index}>
                <td>
                    <input
                    type="checkbox"
                    defaultChecked={currency.selected}
                    onClick={() => toggleCheckbox(index)}
                />
                </td>
                <td >{currency.label}</td>
                <td >{currency.value}</td>

              </tr>
          )
    }

    const currencyTable = currencyList.map(( currency, index) =>CurrencyRow(currency, index))
    const toggleCheckbox = (index) => {
        const item = currencyList[index];
        if(item.selected){
            item.selected = false;
            setSelectedCurrency(current =>
                current.filter(currency => {
                  return currency.value !== item.value;
                }),
              );
        }
        else{
            item.selected = true;
            const updateSelectedCurrency = [...selectedCurrency, item];
            setSelectedCurrency(updateSelectedCurrency);
        }
        console.log(selectedCurrency);
      };
    return(
        <div className="CurrencyList"> 
        <div><h2 style={{ textAlign: "center" }} >Currency List</h2></div>
            <div className = "container">
                <table className="table table-bordered" style={{ textAlign: "center" }} >
                    <thead>
                    <tr>
                        <th>Selected</th>
                        <th>Currency</th>
                        <th>Currency Name</th>
                    </tr>
                    </thead>
                    <tbody>
                        {currencyTable}
                    </tbody>
                </table>
            </div>
        </div>
    )
}