export async function getCurrencyList() {

    try{
        const response = await fetch('/currency-list');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}