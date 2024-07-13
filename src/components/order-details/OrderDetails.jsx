import style from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

const OrderDetails = () => {
    const orderNumber = useSelector(state => state.order.orderNumber);
    return (
        <article className={style.order_details}>
            <div className={style.contents_wrapper}>
                <p className={style.number_order}>
                    <span className="text text_type_digits-large">
                        {orderNumber}
                    </span>
                </p>
                <h2>Идентификатор заказа</h2>
                <span className={style.icon}>
                    <CheckMarkIcon type="primary" />
                </span>
                <p className={style.status_order}>
                    Ваш заказ уже начали готовить
                </p>
                <p className={style.wait}>
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>
        </article>
    )
}

export default OrderDetails;