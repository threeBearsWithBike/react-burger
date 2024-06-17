import style from './app-header.module.css';
import { BurgerIcon, MenuIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return (
        <header className={style.app_header}>
            <nav>
                <div>
                    <span className={style.btn}>
                        <BurgerIcon type="primary" className={'p-2'} />
                        <span className='text text_type_main-default'>Конструктор</span>
                    </span>
                    <span className={style.btn}>
                        <MenuIcon type="secondary" />
                        <span className={'text text_type_main-default'}>Лента заказов</span>
                    </span>
                </div>
            </nav>
            <div className={style.logo}>
                <Logo />
            </div>
            <div className={style.door}>
                <span className={style.btn}>
                    <ProfileIcon type="secondary" />
                    <span className={'text text_type_main-default'}>Личный кабинет</span>
                </span>
            </div>
        </header>
    )
}

export default AppHeader;