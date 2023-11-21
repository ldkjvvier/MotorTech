import {
	DarkThemeToggle,
	Flowbite,
	Button,
} from 'flowbite-react'

import { Link } from 'react-router-dom'
import { customTheme } from '../constants'
import { HiUserCircle } from 'react-icons/hi'

export const HeaderHome = () => {
	return (
		<header>
			<nav className="bg-white dark:bg-gray-800 border-b dark:border-gray-500 shadow-xl">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-3 h-auto">
					<div className="flex flex-wrap  items-center justify-between">
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<Link
								className="flex flex-shrink-0 items-center"
								to={'/'}
							>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/>
							</Link>
							{/* Barra de navegacion */}
							<section className=" sm:ml-6 sm:block">
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

								<button
									type="button"
									className="rounded-lg p-2.5 text-sm text-gray-500 ml-2 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
								>
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
										/>
									</svg>
								</button>
							</div>
							<div className="flex flex-wrap gap-2">
								<Button as={Link} to={'/login'} className="text-black dark:text-white">
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
