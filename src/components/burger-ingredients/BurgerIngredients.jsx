import { useState, useEffect, useRef } from 'react';
import style from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import Ingredient from '../ingredient/Ingredient';


const BurgerIngredients = () => {
    const [current, setCurrent] = useState('one');
    const area1 = useRef();
    const area2 = useRef();
    const area3 = useRef();
    const refIngredients = useRef();

    useEffect(() => {
        const getBorderArea = (area) => {
            return {
                top: area.current.getBoundingClientRect().top,
                bottom: area.current.getBoundingClientRect().bottom
            };
        }
        const horizon = refIngredients.current.getBoundingClientRect().top;
        const showTab = () => {
            const areaBorder1 = getBorderArea(area1);
            const areaBorder2 = getBorderArea(area2);
            const areaBorder3 = getBorderArea(area3);
            if (areaBorder1.top <= horizon && areaBorder1.bottom > horizon) {
                setCurrent('one');
            } else if (areaBorder2.top <= horizon && areaBorder2.bottom > horizon) {
                setCurrent('two');
            } else if (areaBorder3.top <= horizon && areaBorder3.bottom > horizon) {
                setCurrent('three');
            }
        }
        refIngredients.current.addEventListener('scroll', showTab);
    });

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
            <div className={style.ingredients_wrapper} ref={refIngredients}>
                <div ref={area1}>
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
                </div>
                <div ref={area2}>
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
                </div>
                    <div ref={area3}>
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
            </div>
        </article>
    )
}

export default BurgerIngredients;