import style from './modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import PropTypes from 'prop-types';


const Modal = ({children, closeModal}) => {
    useEffect(() => {
        const handlerEscape = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            } else {
                return;
            }
        }
        document.addEventListener('keydown', handlerEscape);
        return () => document.removeEventListener('keydown', handlerEscape);
    }, [closeModal])

    return createPortal(
        <>
            <article className={style.modal}>
                <span className={style.close} onClick={closeModal}>
                    <CloseIcon />
                </span>
                {children}
            </article>
            <ModalOverlay closeModal={closeModal} />
        </>
    , document.querySelector('#modal') )
}

export default Modal;

Modal.propTypes = {
    children: PropTypes.element,
    closeModal: PropTypes.func
}