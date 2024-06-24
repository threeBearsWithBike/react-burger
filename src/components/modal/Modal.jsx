import style from './modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import  OrderDetails from '../order-details/OrderDetails';
import IngredientDetails from '../ingredient-details/IngredientDetails';

const Modal = ({closeModal, typeChild}) => {
    return createPortal(
        <article className={style.modal}>
            <span className={style.close} onClick={closeModal}>
                <CloseIcon type="primary" />
            </span>
            {typeChild ? <OrderDetails /> : <IngredientDetails />}
        </article>,
        document.querySelector('#modal')
    )
}

export default Modal;