import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/userSlice'
export const Login = () => {
	const navigate = useNavigate()
	const [error, setError] = useState('')
	// useDispatch es un hook que nos permite
	// obtener el método dispatch de redux
	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		// Evitamos que el formulario recargue la página
		e.preventDefault()
		const { email, password } = e.target
		
		try {
			// Enviamos los datos al servidor
			// para validarlos
			const response = await fetch(`${api}/api/auth/local`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					identifier: email.value,
					password: password.value,
				}),
			})
			// Obtenemos la respuesta del servidor en formato JSON
			const data = await response.json()
			// Dependiendo de la respuesta del servidor
			// mostramos un mensaje u otro
			switch (response.status) {
				case 200:
					// Guardamos el token en el localstorage
					localStorage.setItem('token', data.jwt)
					// Guardamos el usuario en la store de redux
					dispatch(addUser(data.user))
					// Redireccionamos a la página de usuario
					navigate('/motortech-cl', { replace: true })
					break

				case 400:
					setError('Correo o contraseña incorrectos')
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
		} catch (error) {
			console.error('Error en la petición', error)
			setError('Error en la petición')
		}
	}

	return (
		<>
			<div className="align-middle flex min-h-screen flex-auto flex-col justify-center items-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Ingresa con tu cuenta
					</h2>
				</div>

				<div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						action="#"
						method="dialog"
						onSubmit={(e) => handleSubmit(e)}
					>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-7 text-gray-900"
							>
								Correo electronico
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									placeholder="Ejemplo@gmail.com"
									required
									className="placeholder:italic block w-full rounded-md border-0 p-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Contraseña
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Olvidaste tu contraseña?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									placeholder="********"
									required
									className="block w-full rounded-md border-0 p-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						{error && (
							<div className="text-red-500 text-center font-semibold">
								{error}
							</div>
						)}
						<div>
							<button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Entrar
							</button>
							<Link
								to="motortech-cl"
								className="mt-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Entrar como invitado
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
