import style from './modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = ({closeModal}) => {
    return createPortal(
        <article className={style.modal}>
            <span className={style.close} onClick={closeModal}>
                <CloseIcon type="primary" />
            </span>
        </article>,
        document.querySelector('#modal')
    )
}

export default Modal;