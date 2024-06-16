import style from './app.module.css';
import AppHeader from './components/app-header/AppHeader';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor';

function App() {
  return (
    <div className={style.app}>
      <header>
        <AppHeader />
      </header>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
}

export default App;
