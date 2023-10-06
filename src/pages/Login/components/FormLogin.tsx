import style from './FormLogin.module.scss'
import { useState } from 'react'
import { Button } from '@mui/material'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useAuthContext } from '../../../context/AuthContext'
import { Link } from 'react-router-dom'

const FormLogin = () => {
	const [showPassword, setShowPassword] = useState(false)
	const { login } = useAuthContext()

	const handleSubmit = (session: { email: string; password: string }) => {
		login(session)
	}

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Correo electrónico no válido')
			.required('El correo electrónico es obligatorio.'),
		password: Yup.string().required('La contraseña es obligatoria.'),
	})

	return (
		<div className={style['form-login-container']}>
			<h2>Iniciar sesión</h2>
			<div className={style['form-login-divider']}></div>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className={style['form-login-form']}>
					<div className={style['form-login-field-container']}>
						<label htmlFor='email'>
							Correo electrónico <span>*</span>
						</label>
						<Field id='email' type='email' name='email' autoComplete='on' />
						<ErrorMessage
							name='email'
							component='div'
							className={style['login-form-error']}
						/>
					</div>
					<div className={style['form-login-field-container']}>
						<label htmlFor='password'>
							Contraseña <span>*</span>
						</label>
						<Field
							id='password'
							type='password'
							name='password'
							addon={
								<Button
									className={style['password-button']}
									onClick={togglePasswordVisibility}
								>
									{showPassword ? (
										<VisibilityIcon />
									) : (
										<VisibilityOffIcon />
									)}
								</Button>
							}
						/>
						<ErrorMessage
							name='password'
							component='div'
							className={style['login-form-error']}
						/>
					</div>
					<div className={style['form-login-links']}>
						<div className={style['form-login-links-item']}>
							<span>¿Olvidaste tu contraseña?</span>
							<Link to='/' className={style['form-login-links-button']}>
								Click aquí
							</Link>
						</div>
						<div className={style['form-login-links-item']}>
							<span>¿No tienes cuenta?</span>
							<Link to='/' className={style['form-login-links-button']}>
								Regístrate
							</Link>
						</div>
						<Button
							className={style['form-login-button-submit']}
							type='submit'
						>
							Iniciar sesión
						</Button>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default FormLogin
