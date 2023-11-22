import { DarkThemeToggle, Flowbite, Button } from 'flowbite-react'

import { Link } from 'react-router-dom'
import { customTheme } from '../../../constants'
import { HiUserCircle } from 'react-icons/hi'

export const HeaderHome = () => {
	return (
		<header>
			<nav className="bg-white dark:bg-gray-800 border-b dark:border-gray-500 shadow-xl">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-3 h-auto">
					<div className="flex flex-wrap  items-center justify-end md:justify-between">
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<Link
								className="flex flex-shrink-0 items-center"
								to={'/motortech-cl'}
							>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/>
								<span className="pl-6 text-black dark:text-white font-sans text-xl">
									MotorTech
								</span>
							</Link>
							{/* Barra de navegacion */}
							<section className=" sm:ml-6 sm:block hidden ">
								<div className="flex space-x-4">
									<Link
										to={'motortech-cl'}
										className="bg-gray-900 text-dark dark:text-white rounded-md px-3 py-2 text-sm font-medium dark:bg-gray-700 transition hover:bg-gray-700 dark:hover:bg-gray-600"
										aria-current="page"
									>
										Inicio
									</Link>
									<Link
										to={'motortech-cl/vehicles'}
										className="text-black dark:text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold transition"
									>
										Servicios
									</Link>
									<Link
										href="#"
										className="text-black dark:text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold transition"
									>
										Contacto
									</Link>
									<Link
										to={'motortech-cl/reports'}
										className="text-black dark:text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold transition"
									>
										Reportes
									</Link>
								</div>
							</section>
						</div>
						<div className="flex items-center ">
							<div>
								<Flowbite theme={{ theme: customTheme }}>
									<DarkThemeToggle />
								</Flowbite>

							</div>
							<div className="flex flex-wrap gap-2">
								<Button
									as={Link}
									to={'/login'}
									className="text-black dark:text-white"
								>
									<HiUserCircle className="mr-2 h-5 w-5 text-black dark:text-white" />
									Iniciar Sesión
								</Button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}
