import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import constructorReducer from './constructor/reducer';
import modalReducer from './modal/reducer';
import { customMiddleware } from './middleware/customMiddleware';
import orderReduce from './order/reducer';

const rootReducer = combineReducers({
    ingredientsConstructor: constructorReducer,
    modal: modalReducer,
    order: orderReduce
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(customMiddleware()))
);