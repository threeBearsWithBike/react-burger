import { fetchOrder } from "../../utils/api";


export const GET_ORDER_REQUIEST = 'GET_ORDER_REQUIEST';
export const GET_ORDER_SUCCES = 'GET_ORDER_SUCCES';
export const GET_ORDER_FAILURE = 'GET_ORDER_FAILURE';
export const SET_INGREDIENTS_ID = 'SET_INGREDIENTS_ID';
export const GET_ORDER_CLEANUP = 'GET_ORDER_CLEANUP';

export const getOrder = () => (dispatch, state) => {
    
        fetchOrder(state.order.ingredientsId)
        .then(response => {
                dispatch({type: GET_ORDER_SUCCES, payload: response});
        })
        .catch(error => dispatch({type: GET_ORDER_FAILURE, payload: error.message}));
}

