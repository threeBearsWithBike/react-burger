import style from './home.module.css';
import AppHeader from '../../components/app-header/AppHeader';
import BurgerIngredients from '../../components/burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../../components/burger-constructor/BurgerConstructor';
import Modal from '../../components/modal/Modal';
import IngredientDetails from '../../components/ingredient-details/IngredientDetails';
import OrderDetails from '../../components/order-details/OrderDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/constructor/actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



const Home = () => {
    const isOpenModal = useSelector(state => state.modal.isOpen);
    const contentModal = useSelector(state => state.modal.type);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getIngredients());
    }, [dispatch])
    return (
        <section className={style.home}>
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
    )
}

export default Home;