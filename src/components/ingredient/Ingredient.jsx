import style from './ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MODAL } from '../../services/modal/actions';
import { SET_CURRENT_INGREDIENT } from '../../services/modal/actions';
import { useDrag } from 'react-dnd';
import { useMemo } from 'react';


const Ingredient = ({ingredient}) => {
    const dispatch = useDispatch();
    const constructorIngredients = useSelector(state => state.ingredientsConstructor.constructorIngredients);

    const count = useMemo(() => {
        if (ingredient.type !== 'bun') {
            return constructorIngredients.primary.reduce((sum, item) => {
                return ingredient._id === item._id ? sum += 1 : sum;
            }, 0)

        } else {
            if(constructorIngredients.buns) {
                return constructorIngredients.buns._id === ingredient._id ? 2 : 0;
            }
            return 0; 
        }
    }, [constructorIngredients, ingredient.type, ingredient._id]);

    const [{isDrag}, dragRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    
    const handlerClick = (ingredient) => {
        dispatch({type: SET_CURRENT_INGREDIENT, payload: ingredient});
        dispatch({type: OPEN_MODAL, payload: 'ingredient-details'});
    }

    return (
        
            !isDrag &&
        <div
            className={style.burger_ingredients_item}
            key={ingredient._id}
            onClick={() => {
                handlerClick(ingredient);
            }}
            ref={dragRef}
        >
            <div className={style.burger_ingredients_picture}>
                <img src={ingredient.image} alt="#"/>
            </div>
            <div className={style.burger_ingredients_price}>
                <span className='text text_type_digits-default'>
                    {ingredient.price}
                    &nbsp;
                    <CurrencyIcon type="primary" />
                </span>
            </div>
            <div className={style.burger_ingredients_name}>
                <span className='text text_type_main-default'>{ingredient.name}</span>
            </div>
            {
                count !== 0 && <Counter count={count} size="default" extraClass="m-1" />
            }
        </div>
    )
}

export default Ingredient;