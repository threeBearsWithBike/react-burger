import style from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => {
    return (
        <div>
            <p className="text text_type_digits-large">034536</p>
            <CheckMarkIcon type="primary" />
        </div>
    )
}

export default OrderDetails;