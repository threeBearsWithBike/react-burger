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

  const closeModal = () => {
    setOpenModal(false);
  }

  const openModal = () => {
    setOpenModal(true);
  }

  return (
    <section className={style.app}>
      {isOpenModal && <ModalOverlay closeModal={closeModal} />}
      {isOpenModal && <Modal closeModal={closeModal} />}
      <div className={style.header_wrapper}>
        <AppHeader />
      </div>
      { success && <BurgerIngredients ingredientsList={data} /> }
      { success && <BurgerConstructor ingredientsList={data} openModal={openModal} /> }
    </section>
  );
}

export default App;
