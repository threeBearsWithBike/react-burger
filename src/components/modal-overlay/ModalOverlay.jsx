import { useEffect } from 'react';
import style from './modal-overlay.module.css';
import { createPortal } from 'react-dom';

const ModalOverlay = ({closeModal}) => {
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
        <section className={style.overlay} onClick={closeModal}>
        </section>,
        document.querySelector('#modal')
    )
}

export default ModalOverlay;