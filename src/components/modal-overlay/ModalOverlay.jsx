import style from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({closeModal}) => {
    return <section className={style.overlay} onClick={closeModal}></section>        
}

export default ModalOverlay;

ModalOverlay.propTypes = {
    closeModal: PropTypes.func
}