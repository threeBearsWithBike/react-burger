import style from './app.module.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/constructor/actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  const isOpenModal = useSelector(state => state.modal.isOpen);
  const contentModal = useSelector(state => state.modal.type);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])
  return (
    <section className={style.app}>
      {
        isOpenModal &&
        <Modal>
          { contentModal === 'ingredient-details' && <IngredientDetails /> }
          { contentModal === 'order-details' && <OrderDetails /> }
        </Modal>
      }
      <div className={style.header_wrapper}>
        <AppHeader />
      </div>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </section>
  );
}

export default App;
