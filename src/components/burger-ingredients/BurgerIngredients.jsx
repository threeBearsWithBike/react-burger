import { useState } from 'react';
import style from './burger-ingredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../../utils/data';


const BurgerIngredients = () => {
    const [current, setCurrent] = useState('one');

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
                            buns.map(ingredient => {
                                return (
                                    <div className={style.burger_ingredients_item} key={ingredient._id}>
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
                                            (ingredient._id === '60666c42cc7b410027a1a9b1' ||
                                                ingredient._id === '60666c42cc7b410027a1a9b5' ||
                                                ingredient._id === '60666c42cc7b410027a1a9b7') && 
                                            <Counter count={1} size="default" extraClass="m-1" />
                                        }
                                </div>
                                )
                            })
                        }
                </div>

                <div className={style.ingredients_title}>
                    <span className='text text_type_main-medium'>Соусы</span>
                </div>
                <div className={style.ingredients_part}>
                        {
                            sauces.map(ingredient => {
                                return (
                                    <div className={style.burger_ingredients_item} key={ingredient._id}>
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
                                            (ingredient._id === '60666c42cc7b410027a1a9b1' ||
                                                ingredient._id === '60666c42cc7b410027a1a9b5' ||
                                                ingredient._id === '60666c42cc7b410027a1a9b7') && 
                                            <Counter count={1} size="default" extraClass="m-1" />
                                        }
                                    </div>
                                )
                            })
                        }
                </div>

                <div className={style.ingredients_title}>
                    <span className='text text_type_main-medium'>Начинка</span>
                </div>
                <div className={style.ingredients_part}>
                        {
                            primaryIngredients.map(ingredient => {
                                return (
                                    <div className={style.burger_ingredients_item} key={ingredient._id}>
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
                                            (ingredient._id === '60666c42cc7b410027a1a9b1' ||
                                                ingredient._id === '60666c42cc7b410027a1a9b5' ||
                                                ingredient._id === '60666c42cc7b410027a1a9b7') && 
                                            <Counter count={1} size="default" extraClass="m-1" />
                                        }
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </article>
    )
}

export default BurgerIngredients;