export async function getResultExchange(amount, toCurrency, fromCurrency, date) {

    try{
        const response = await fetch('/exchange',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({amount: amount, toCurrency: toCurrency, fromCurrency: fromCurrency, date: date})
        });
        return await response.json();
    }catch(error) {
        return [];
    }
    
}