import {
	Dropdown,
	DarkThemeToggle,
	Flowbite,
	Avatar,
} from 'flowbite-react'
import { customTheme } from '../constants'
import { useSelector } from 'react-redux'
import { Logout } from '../pages/Account/logout'
import { Link } from 'react-router-dom'
export const Header = () => {
	const user = useSelector((state) => state.user)

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
								<span className='pl-6 text-black dark:text-white font-sans text-xl'>MotorTech</span>
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
							<div className="flex md:order-2 ml-2">
								<Dropdown
									arrowIcon={false}
									inline
									label={
										<Avatar
											alt="User settings"
											img={user.avatar}
											rounded
										/>
									}
								>
									<Dropdown.Header className="text-gray-900 dark:text-white">
										<span className="block text-sm">
											{`${user.name} ${user.lastname}`}
										</span>
										<span className="block truncate text-sm font-medium">
											{user.email}
										</span>
									</Dropdown.Header>

									<Dropdown.Item
										as={Link}
										to={`motortech-cl/profile`}
										className="text-gray-900 dark:text-white"
									>
										Perfil
									</Dropdown.Item>
									<Dropdown.Item className="text-gray-900 dark:text-white">
										Configuración
									</Dropdown.Item>
									<Dropdown.Divider theme={{ theme: customTheme }} />
									<Logout>
										<Dropdown.Item className="text-gray-900 dark:text-white">
											Cerrar sesión
										</Dropdown.Item>
									</Logout>
								</Dropdown>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}