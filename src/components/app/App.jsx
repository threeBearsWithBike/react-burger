import style from './app.module.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';

function App() {
  return (
    <section className={style.app}>
      <div className={style.header_wrapper}>
        <AppHeader />
      </div>
      <BurgerIngredients />
      <BurgerConstructor />
    </section>
  );
}

export default App;
