import { fetchIngredients } from "../../utils/api";
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const GET_INGREDIENTS_REQUIEST = 'GET_INGREDIENTS_REQUIEST';
export const GET_INGREDIENTS_SUCCES = 'GET_INGREDIENTS_SUCCES';
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE';
export const GET_MOVE = 'GET_MOVE';

export const getIngredients = () => (dispatch) => {
    dispatch({type: GET_INGREDIENTS_REQUIEST});
    fetchIngredients()
    .then(response => dispatch({type: GET_INGREDIENTS_SUCCES, payload: response}))
    .catch(error => dispatch({type: GET_INGREDIENTS_FAILURE, payload: error.message}));
}