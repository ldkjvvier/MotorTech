import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FirstStep } from './RegisterForm'
import { SecondStep } from './RegisterForm'
import { api } from '../../constants'
import { token } from '../../constants'
import { FixDate } from '../../fixDate'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
	const navigate = useNavigate()
	const [error, setError] = useState('')
	const [step, setStep] = useState(1)
	const [userData, setUserData] = useState({
		email: '',
		password: '',
		username: '',
		name: '',
		lastname: '',
		date: '',
		phone: '',
		gender: '',
		address: '',
	})
	const handleSubmit = (e) => {
		e.preventDefault()
		const { email, password, confirmPassword, linkCheckbox } =
			e.target.elements

		if (step === 1) {
			if (password.value !== confirmPassword.value) {
				setError('Las contraseñas no coinciden')
				return
			}
			if (linkCheckbox.checked === false) {
				setError('Debes aceptar los terminos y condiciones')
				return
			}
			setError('')
		}
		setUserData({
			...userData,
			email: email.value,
			password: password.value,
		})
		setStep(2)
	}

	const submitData = async (e) => {
		e.preventDefault()
		// Obtener datos del formulario
		const { username, name, lastname, date, gender, address, phone } =
			e.target
		const newDate = FixDate(date.value)
		setUserData({
			...userData,
			username: username.value,
			name: name.value,
			lastname: lastname.value,
			date: newDate,
			gender: gender.value,
			address: address.value,
			phone: phone.value,
		})

		// Enviar datos al servidor
		const response = await fetch(`${api}/api/auth/local/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(userData),
		})
		// Obtenemos la respuesta del servidor en formato JSON
		const data = await response.json()
		// Dependiendo de la respuesta del servidor
		// mostramos un mensaje u otro
		switch (response.status) {
			case 200:
				// Redireccionamos a la página de usuario
				navigate('/login', { replace: true })
				break

			case 400:
				if (data.error.message) setError(data.error.message)
				else setError(data.error.details.errors[0].message)
				break

			case 500:
				setError('Error en el servidor')
				break

			case 429:
				setError('Demasiadas peticiones al servidor')
				break

			default:
				break
		}
	}

	return (
		<>
			<div className="flex items-center min-h-screen p-6 dark:bg-gray-900 bg-white">
				<div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden dark:bg-white rounded-2xl shadow-xl bg-gray-800">
					<div className="flex flex-col overflow-y-auto md:flex-row">
						<div className="h-32 md:h-auto md:w-1/2">
							<img
								aria-hidden="true"
								className="object-cover w-full h-full dark:hidden"
								src="https://cdn.pariscityvision.com/library/image/5458.jpg"
								alt="Office"
							/>
							<img
								aria-hidden="true"
								className="hidden object-cover w-full h-full dark:block"
								src="https://cdn.pariscityvision.com/library/image/5458.jpg"
								alt="Office"
							/>
						</div>
						<div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 dark:border border-none">
							<form
								className="w-full"
								onSubmit={
									step === 1
										? (e) => handleSubmit(e)
										: (e) => submitData(e)
								}
							>
								{/* Componente el paso de registro */}
								{step === 1 ? <FirstStep /> : <SecondStep />}

								<div className="mt-4">
									<button
										type="submit"
										className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										{step === 1 ? 'Registrarse' : 'Finalizar registro'}
									</button>
								</div>

								<p className="text-center text-red-500 text-sm font-semibold mt-5">
									{error}
								</p>

								{step === 1 && (
									<>
										<hr className="my-8" />
										<Link
											to={'/login'}
											className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 focus:outline-none focus:shadow-outline-gray"
										>
											<span className="ml-2">
												Ya tienes una cuenta?
											</span>
										</Link>
									</>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
