import style from './Login.module.scss'
import FormLogin from './components/FormLogin'

const Login = () => {
	return (
		<div className={style['login-main-container']}>
			<FormLogin />
		</div>
	)
}

export default Login
