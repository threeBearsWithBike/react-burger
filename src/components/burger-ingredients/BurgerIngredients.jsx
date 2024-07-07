import { useState } from 'react';
import style from './burger-ingredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Ingredient from '../ingredient/Ingredient';


const BurgerIngredients = () => {
    const [current, setCurrent] = useState('one');

    const data = useSelector((state) => state.ingredientsConstructor.ingredients);

    const buns = data.filter(ingredient => ingredient.type === 'bun');
    const primaryIngredients = data.filter(ingredient => ingredient.type === 'main');
    const sauces = data.filter(ingredient => ingredient.type === 'sauce');


    return (
        <article className={style.burger_ingredients}>
            <h1 className={style.burger_ingredients_title}>
                <span className='ttext text_type_main-large'>Соберите бургер</span>
            </h1>
            <div className={style.tab}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={style.ingredients_wrapper}>
                <div className={style.ingredients_title}>
                    <span className='text text_type_main-medium'>Булки</span>
                </div>
                <div className={style.ingredients_part}>
                        {
                            buns.map(ingredient => <Ingredient
                                                        key={ingredient._id}
                                                        ingredient={ingredient}
                                                    />)
                        }
                </div>
                <div className={style.ingredients_title}>
                    <span className='text text_type_main-medium'>Соусы</span>
                </div>
                <div className={style.ingredients_part}>
                        {
                            sauces.map(ingredient => <Ingredient 
                                                        key={ingredient._id}
                                                        ingredient={ingredient}
                                                    />)
                        }
                </div>
                <div className={style.ingredients_title}>
                    <span className='text text_type_main-medium'>Начинка</span>
                </div>
                <div className={style.ingredients_part}>
                        {
                            primaryIngredients.map(ingredient => <Ingredient
                                                                    key={ingredient._id}
                                                                    ingredient={ingredient}
                                                                />)
                        }
                </div>
            </div>
        </article>
    )
}

export default BurgerIngredients;


BurgerIngredients.propTypes = {
    ingredientsList: PropTypes.arrayOf(PropTypes.object),
    openModal: PropTypes.func,
    getModalContent: PropTypes.func,
    ingredientsProvider: PropTypes.func
}