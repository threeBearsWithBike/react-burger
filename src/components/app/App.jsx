import style from './app.module.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import { useFetch } from '../../castoms-hooks/useFetch';


const DOMEN = 'norma.nomoreparties.space';

function App() {
  const {success, data} = useFetch(`https://${DOMEN}/api/ingredients`);

  return (
    <section className={style.app}>
      <div className={style.header_wrapper}>
        <AppHeader />
      </div>
      { success && <BurgerIngredients ingredientsList={data} /> }
      { success && <BurgerConstructor ingredientsList={data} /> }
    </section>
  );
}

export default App;
