import { checkResponse } from "./checkResponse";

export const BASE_URL = 'https://norma.nomoreparties.space/api/';

export const fetchIngredients = () => {
    return fetch(`${BASE_URL}ingredients`)
            .then(response => checkResponse(response))
            .then(response => response.data)
}

export const fetchOrder = (value) => {
        return fetch(`${BASE_URL}orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(response => checkResponse(response))
            .then(response => response.order.number)
}