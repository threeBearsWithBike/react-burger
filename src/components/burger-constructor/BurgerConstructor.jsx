import style from './burger-constructor.module.css';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_INGREDIENT, DELETE_INGREDIENT } from '../../services/constructor/actions';
import { OPEN_MODAL } from '../../services/modal/actions';
import { SET_INGREDIENTS_ID } from '../../services/order/action';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useMemo } from 'react';
import { getOrder } from '../../services/order/action';

const BurgerConstructor = () => {
    const dispatch = useDispatch();

    const constructorIngredients = useSelector(state => state.ingredientsConstructor.constructorIngredients);

    const totalPrice = useMemo(() => {
        let sumBuns = constructorIngredients.buns ? constructorIngredients.buns.price * 2 : 0;
        let sumPrimary = constructorIngredients.primary.reduce((sum, ingredient) => {
            return sum += ingredient.price;
        }, 0)
        return sumBuns + sumPrimary;
    }, [constructorIngredients]);

    useEffect(() => {
        dispatch({type: SET_INGREDIENTS_ID, payload: constructorIngredients});
    }, [dispatch, constructorIngredients]);
    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop: (ingredient) => {
            dispatch({type: ADD_INGREDIENT, payload: {...ingredient, key: uuidv4()}});
        }
    })
    
    const handlerSubmit = () => {
        dispatch(getOrder());
        dispatch({type: OPEN_MODAL, payload: 'order-details'});
    }

    return (
        <article className={style.burger_constructor}  ref={dropTarget}>
            <div className={constructorIngredients.primary.length !== 0 && constructorIngredients.buns ? style.all_ingredients : style.all_ingredients__void}>
                <div className={style.bun}>
                    {
                        constructorIngredients.buns ?
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={constructorIngredients.buns.name}
                    price={constructorIngredients.buns.price}
                    thumbnail={constructorIngredients.buns.image}
                    /> :
                    <span className="text text_type_main-large">
                    buns
                    </span>
                    }
                </div>
                <div className={style.auther_ingredients}>
                    {
                        constructorIngredients.primary.length !== 0 ? constructorIngredients.primary.map(ingredient => {
                            return (
                                <div className={style.auther_ingredients_item} key={ingredient.key}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                                handleClose={() => dispatch({type: DELETE_INGREDIENT, payload: ingredient.key})}
                                />
                                </div>
                            )
                        }) :
                        <span className="text text_type_main-large">
                        Ingredients
                        </span>
                    }
                </div>
                <div className={style.bun}>
                    {
                        constructorIngredients.buns ?
                    <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={constructorIngredients.buns.name}
                    price={constructorIngredients.buns.price}
                    thumbnail={constructorIngredients.buns.image}
                    /> :
                    <span className="text text_type_main-large">
                    buns
                    </span>
                    }
                </div>  
              </div>
            <div className={style.do_order}>
                <div className={style.total_price}>
                    <span className="text text_type_digits-medium">{totalPrice}&nbsp;</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="submit" type="primary" size="large" onClick={handlerSubmit}>Оформить</Button>
            </div>
        </article>
    )
}

export default BurgerConstructor;