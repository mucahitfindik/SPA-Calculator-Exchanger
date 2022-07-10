
export const DisplayExchangeResult = ({boardResult}) => {
    
    if (boardResult.length === 0) return null
    const ExchchangeResultRow = (result, index) => {
        return(
              <tr key={index}>
                <td >{result.to_currency}</td>
                <td >{result.result}</td>

              </tr>
          )
    }
    
    const exchangeResultTable = boardResult.map(( result, index) =>ExchchangeResultRow(result, index))
    return(
        <div className="ExchangeResultTable"> 
        <div><h2 style={{ textAlign: "center" }} >Exchange Result Table</h2></div>
            <div className = "container">
                <table className="table table-bordered" style={{ textAlign: "center" }} >
                    <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Result</th>
                    </tr>
                    </thead>
                    <tbody>
                        {exchangeResultTable}
                    </tbody>
                </table>
            </div>
        </div>
    )
}