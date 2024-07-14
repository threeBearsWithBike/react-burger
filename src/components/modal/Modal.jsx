import style from './modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useEffect } from 'react';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CLOSE_MODAL } from '../../services/modal/actions';
import { GET_ORDER_CLEANUP } from '../../services/order/action';
import { GET_CONSTRUCTOR_CLEANUP } from '../../services/constructor/actions';


const Modal = ({children}) => {

    const dispatch = useDispatch();
    const closeModal = useCallback(() => {
        dispatch({type: CLOSE_MODAL, payload: null});
        dispatch({type: GET_CONSTRUCTOR_CLEANUP});
        dispatch({type: GET_ORDER_CLEANUP});
    }, [dispatch])
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
    children: PropTypes.array,
    closeModal: PropTypes.func
}