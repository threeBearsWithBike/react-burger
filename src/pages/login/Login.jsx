import style from './login.module.css';
import AppHeader from "../../components/app-header/AppHeader";
import { PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Login = () => {
    return (
        <>
            <p className={style.header}>
                <AppHeader />
            </p>

            <div className={style.form_wrapper}>
                <h4 className={style.title_form}>
                    <span className="text text_type_main-medium">Вход</span>
                </h4>
                <form action="#">
                    <p className={style.input_wrapper}>
                        <EmailInput      
                            // onChange={onChange}
                            // value={value}
                            name={'email'}
                            isIcon={false}
                        />
                    </p>
                    <p className={style.input_wrapper}>
                        <PasswordInput
                            // onChange={onChange}
                            // value={value}
                            name={'password'}
                            extraClass="mb-2"
                        />
                    </p>
                    <p className={style.button_wrapper}>
                        <Button htmlType="button" type="primary" size="medium">
                            Войти
                        </Button>
                    </p>
                </form>
                <p className={style.footer_row}>
                    <span className={style.question}>
                        Вы - новый пользователь?
                    </span>
                    <span className={style.do_it}>
                        Зарегистрироваться
                    </span>
                </p>
                <p className={style.footer_row}>
                    <span className={style.question}>
                        Забыли пароль?
                    </span>
                    <span className={style.do_it}>
                        Восстановить пароль
                    </span>
                </p>
            </div>
        </>
    )
}

export default Login;