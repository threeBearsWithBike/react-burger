import {GET_ORDER_REQUIEST, GET_ORDER_SUCCES, GET_ORDER_FAILURE, SET_INGREDIENTS_ID} from './action';

const orderState = {
    ingredientsId: {
        ingredients: []
    },
    orderNumber: null,
    error: null,
    isLoading: false,
}

const orderReduce = (state = orderState, action) => {
    switch(action.type) {
        case(SET_INGREDIENTS_ID): {
            const newBunsId = [];
            if (action.payload.buns && !newBunsId.includes(action.payload.buns._id)) {
                newBunsId.push(action.payload.buns._id);
            }
            const newPrimaryId = action.payload.primary.reduce((acc, ingredient) => {
                        return !acc.includes(ingredient._id) ? acc = [...acc, ingredient._id] : acc;
                    }, []);

            return {...state, ingredientsId: {ingredients: [...newBunsId, ...newPrimaryId]}}
        }
        case(GET_ORDER_REQUIEST): {
            return {...state, isLoading: true};
        }
        case(GET_ORDER_SUCCES): {
            return {...state, isLoading: false, error: null, orderNumber: action.payload};
        }
        case(GET_ORDER_FAILURE): {
            return {...state, isLoading: false, error: action.payload, orderNumber: []};
        }
        default:
            return state;
    }
}

export default orderReduce;