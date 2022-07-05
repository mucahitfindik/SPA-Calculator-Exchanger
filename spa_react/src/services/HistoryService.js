export async function getHistoryFormula() {

    try{
        const response = await fetch('/history/formula');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}
export async function getHistoryExchange() {

    try{
        const response = await fetch('/history/exchange');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}