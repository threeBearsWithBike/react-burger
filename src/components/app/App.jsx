import style from './app.module.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import { useState } from 'react';
import { useFetch } from '../../custom-hooks/useFetch';
import { useModal } from '../../custom-hooks/useModal';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';



const DOMEN = 'norma.nomoreparties.space';

function App() {
  const {success, data} = useFetch(`https://${DOMEN}/api/ingredients`);
  const {isOpenModal, openModal, closeModal} = useModal();
  const [isModalContent, setIsModalContent] = useState(null);
  const [isIngredients, setIngredients] = useState();

  const getModalContent = (value) => {
    if (value) {
      setIsModalContent(true);
    } else {
      setIsModalContent(false);
    }
  }

  const ingredientsProvider = (details) => {
    setIngredients(details);
  }

  return (
    <section className={style.app}>

      {
        isOpenModal &&
        <>
          <Modal closeModal={closeModal}>
            {isModalContent ? <OrderDetails /> : <IngredientDetails ingredients={isIngredients} />}
          </Modal>
        </>
      }

      <div className={style.header_wrapper}>
        <AppHeader />
      </div>
      { success && <BurgerIngredients
                      ingredientsList={data}
                      openModal={openModal}
                      getModalContent={getModalContent}
                      ingredientsProvider={ingredientsProvider}
                    />
      }
      { success && <BurgerConstructor
                      ingredientsList={data}
                      openModal={openModal}
                      getModalContent={getModalContent}
                    />
      }
    </section>
  );
}

export default App;
