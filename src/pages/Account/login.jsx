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
			console.log(data)
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
			<div className="flex items-center min-h-screen p-6 dark:bg-gray-900 bg-white">
				<div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden dark:bg-white rounded-2xl shadow-xl bg-gray-800">
					<div className="flex flex-col overflow-y-auto md:flex-row">
						<div className="h-32 md:h-auto md:w-1/2">
							<img
								aria-hidden="true"
								className="object-cover w-full h-full dark:hidden"
								src="https://img.freepik.com/fotos-premium/regreso-al-futuro-coche-delorean_900101-12128.jpg"
								alt="Office"
							/>
							<img
								aria-hidden="true"
								className="hidden object-cover w-full h-full dark:block"
								src="https://cdn.dribbble.com/users/2578957/screenshots/6551149/delorean_retro_80s_flyer_1980s_template_poster_wall_synth_wave_new_retro.jpg"
								alt="Office"
							/>
						</div>
						<div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 dark:border border-none">
							<div className="w-full">
								<form onSubmit={(e) => handleSubmit(e)}>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium leading-7 dark:text-gray-900 text-gray-200"
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
												className="block w-full rounded-md border-0 p-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div className="mt-4">
										<div className="flex justify-between">
											<label
												htmlFor="password"
												className="block text-sm font-medium leading-7 dark:text-gray-900 text-gray-200"
											>
												Contraseña
											</label>
											<a
												href="#"
												className="text-sm text-gray-400 hover:underline"
											>
												Olvidaste tu contraseña?
											</a>
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

									<div className="mt-4">
										<button
											type="submit"
											className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											Entrar
										</button>
									</div>
								</form>
								{error && <div className="text-red-500">{error}</div>}
								<hr className="my-8" />

								<Link
									to={'/register'}
									className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 focus:outline-none focus:shadow-outline-gray"
								>
									<span>Crear cuenta</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
