export const fetchIngredients = () => {
    return fetch(`https://norma.nomoreparties.space/api/ingredients`)
            .then(response => response.ok ? response.json() : Promise.reject(`Error ${response.status}`))
            .then(response => response.data)
}

export const fetchOrder = (value) => {
    try {
        if (value.ingredients.length === 0) {
            throw Error('no ingredients');
        }
        return fetch(`https://norma.nomoreparties.space/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(response => response.ok ? response.json() : Promise.reject(`Error ${response.status}`))
            .then(response => response.order.number)
    } catch(error) {
        console.log(error);
    }



}