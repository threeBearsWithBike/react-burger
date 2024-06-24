import style from './app.module.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import { useState } from 'react';
import { useFetch } from '../../castoms-hooks/useFetch';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import Modal from '../modal/Modal';



const DOMEN = 'norma.nomoreparties.space';

function App() {
  const {success, data} = useFetch(`https://${DOMEN}/api/ingredients`);
  const [isOpenModal, setOpenModal] = useState(false);
  const [isTypeChildOfModal, setTypeChildOfModal] = useState(null);

  const closeModal = () => {
    setOpenModal(false);
  }

  const openModal = () => {
    setOpenModal(true);
  }

  const getTypeChildOfModal = (value) => {
    value ? setTypeChildOfModal(true) : setTypeChildOfModal(false);
  }

  return (
    <section className={style.app}>
      {isOpenModal && <ModalOverlay closeModal={closeModal} />}
      {isOpenModal && <Modal closeModal={closeModal} typeChild={isTypeChildOfModal} />}
      <div className={style.header_wrapper}>
        <AppHeader />
      </div>
      { success && <BurgerIngredients ingredientsList={data} openModal={openModal} getTypeChildOfModal={getTypeChildOfModal} /> }
      { success && <BurgerConstructor ingredientsList={data} openModal={openModal} getTypeChildOfModal={getTypeChildOfModal} /> }
    </section>
  );
}

export default App;
