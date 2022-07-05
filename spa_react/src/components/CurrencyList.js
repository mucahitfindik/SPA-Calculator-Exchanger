import {useState} from 'react';
import TableRow from '@material-ui/core/TableRow';
import './CurrencyList.css'
export const CurrencyList = ({currencyList}) => {
    const [selectedCurrency, setSelectedCurrency] = useState([]);
    console.log(currencyList);

    if (currencyList.length === 0) return null

    const CurrencyRow = (currency, index) => {
        return(
              <TableRow key={index}>
                <td>
                    <input
                    type="checkbox"
                    defaultChecked={currency.selected}
                    onClick={() => toggleCheckbox(index)}
                />
                </td>
                <td >{currency[0]}</td>
                <td >{currency[1]}</td>

              </TableRow>
          )
    }

    const currencyTable = currencyList.map(( currency, index) =>CurrencyRow(currency, index))
    const toggleCheckbox = (index) => {
        const item = currencyList[index];
        if(item.selected){
            item.selected = false;
            setSelectedCurrency(current =>
                current.filter(currency => {
                  return currency[0] !== item[0];
                }),
              );
        }
        else{
            item.selected = true;
            const updateSelectedCurrency = [...selectedCurrency, item];
            setSelectedCurrency(updateSelectedCurrency);
        }
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