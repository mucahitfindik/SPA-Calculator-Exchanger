export async function getResultCalculation(exp) {

    try{
        const response = await fetch('/calculate',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(exp)
        });
        return await response.json();
    }catch(error) {
        console.log(error);
        return [];
    }
    
}