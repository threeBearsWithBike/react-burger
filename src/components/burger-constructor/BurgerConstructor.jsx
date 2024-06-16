import style from './burger-constructor.module.css';
import { CurrencyIcon, DragIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../../utils/data';

const BurgerConstructor = () => {
    const autherIngredients = data.filter(ingredient => ingredient.type !== 'bun');

    return (
        <div className={style.burger_constructor}>
            <div className={style.all_ingredients}>
                <div className={style.bun}>
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={data[0].image}
                    />
                </div>
                <div className={style.auther_ingredients}>
                    {
                        autherIngredients.map(ingredient => {
                            return (
                                <div className={style.auther_ingredients_item}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                    text={ingredient.name}
                                    price={ingredient.price}
                                    thumbnail={ingredient.image}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.bun}>
                    <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={data[0].image}
                    />
                </div>
            </div>
            <div className={style.do_order}>
                <div className={style.total_price}>
                    <span className="text text_type_digits-medium">610 </span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="submit" type="primary" size="large">Оформить</Button>
            </div>
        </div>
    )
}

export default BurgerConstructor;