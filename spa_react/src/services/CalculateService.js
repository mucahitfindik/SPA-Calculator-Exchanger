export async function getResultCalculation(expression) {

    try{
        const response = await fetch('/calculate',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({expression: expression})
        });
        return await response.json();
    }catch(error) {
        return [];
    }
    
}