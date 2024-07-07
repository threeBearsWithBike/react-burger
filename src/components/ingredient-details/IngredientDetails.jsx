import style from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const IngredientDetails = () => {

    const ingredient = useSelector((state) => state.modal.currentIngredient);

    return (
        <article className={style.ingredient_details}>
            <h2>
                <span className="text text_type_main-large">Детали ингредиента</span>
            </h2>
            <div className={style.contents_wrapper}>
                <div className={style.inredient_image}>
                    <img src={ingredient.image_large} alt="#" />
                </div>
                <p className={style.name_ingredient}>
                    <span className="text text_type_main-medium">{ingredient.name}</span>
                </p>
                <div className={style.ingredients + ' text text_type_main-small'}>
                    <div className={style.calories}>
                        <p>Калории, ккал</p>
                        <p>{ingredient.calories}</p>
                    </div>
                    <div className={style.proteins}>
                        <p>Белки, г</p>
                        <p>{ingredient.proteins}</p>
                    </div>
                    <div className={style.fat}>
                        <p>Жиры, г</p>
                        <p>{ingredient.fat}</p>
                    </div>  
                    <div className={style.carbohydrates}>
                        <p>Углеводы, г</p>
                        <p>{ingredient.carbohydrates}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default IngredientDetails;

IngredientDetails.propTypes = {
    ingredients: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number
    })
}