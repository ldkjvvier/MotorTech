import { useSelector } from 'react-redux'
export const Profile = () => {
	const {
		name,
		lastname,
		email,
		telefono,
		direccion,
		nacimiento,
		fecha_creacion,
	} = useSelector((state) => state.user)
	return (
		<div
			className="bg-gray-100 dark:bg-slate-900 w-full"
		>
			<div className="container mx-auto  p-5">
				<div className="md:flex no-wrap md:-mx-2">
					<div className="w-full md:w-3/12 md:mx-2">
						<div className="bg-white dark:bg-slate-800 p-3 border-t-4 border-green-400 rounded">
							<div className="image overflow-hidden rounded-xl">
								<img
									className="h-auto w-full mx-auto"
									src="https://lavinephotography.com.au/wp-content/uploads/2022/09/Fam_Kids024-1.jpg"
									alt=""
								/>
							</div>
							<h1 className="text-gray-900 dark:text-white text-center font-bold text-xl leading-8 my-1">
								{`${name} ${lastname}`}
							</h1>
							<h3 className="text-gray-600 dark:text-gray-300 font-lg text-semibold leading-6">
								Owner at Her Company Inc.
							</h3>
							<p className="text-sm text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-600 leading-6 transition">
								Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Reprehenderit, eligendi dolorum sequi illum qui
								unde aspernatur non deserunt
							</p>
							<section className="bg-gray-100 dark:bg-slate-700 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
								<div className="flex items-center py-3 dark:text-gray-300">
									<span>Miembro desde: </span>
									<span className="ml-auto">
										{fecha_creacion.split('T')[0]}
									</span>
								</div>
							</section>
						</div>
						<div className="my-4"></div>
					</div>
					<div className="w-full md:w-9/12 mx-2 flex flex-col gap-4">
						<div className="bg-white dark:bg-slate-800 p-3 shadow-sm rounded">
							<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
								<span className="text-green-500">
									<svg
										className="h-5"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</span>
								<span className="tracking-wide dark:text-white">
									Acerca de mí
								</span>
							</div>
							<div className="text-gray-700">
								<div className="grid md:grid-cols-2 text-sm dark:text-gray-200/80">
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Nombre
										</div>
										<div className="px-4 py-2 dark:text-gray-400/80">
											{name}
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Apellido
										</div>
										<div className="px-4 py-2 dark:text-gray-400/80">
											{lastname}
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Género
										</div>
										<div className="px-4 py-2 dark:text-gray-400/80">
											Female
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Número
										</div>
										<div className="px-4 py-2 dark:text-gray-400/80">
											{telefono}
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Dirección
										</div>
										<div className="px-4 py-2 dark:text-gray-400/80">
											{direccion}
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold">
											Email
										</div>
										<div className="px-4 py-2">
											<a
												className="text-blue-800 dark:text-blue-600 "
												href="mailto:jane@example.com"
											>
												{email}
											</a>
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="px-4 py-2 font-semibold ">
											Fecha de nacimiento
										</div>
										<div className="px-4 py-2 dark:text-gray-400/80">
											{nacimiento}
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-slate-800 p-3 shadow-sm rounded">
							<div className="grid grid-cols-2">
								<div>
									<div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white leading-8 mb-3">
										<span className="text-green-500">
											<svg
												className="h-5"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
												/>
											</svg>
										</span>
										<span className="tracking-wide">Experience</span>
									</div>
									<ul className="list-inside space-y-2">
										<li>
											<div className="text-teal-600 dark:text-teal-400">
												Owner at Her Company Inc.
											</div>
											<div className="text-gray-500 dark:text-gray-400 text-xs">
												March 2020 - Now
											</div>
										</li>
										<li>
											<div className="text-teal-600 dark:text-teal-400">
												Owner at Her Company Inc.
											</div>
											<div className="text-gray-500 dark:text-gray-400 text-xs">
												March 2020 - Now
											</div>
										</li>
									</ul>
								</div>
								<div>
									<div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white leading-8 mb-3">
										<span className="text-green-500">
											<svg
												className="h-5"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													fill="none"
													d="M12 14l9-5-9-5-9 5 9 5z"
												/>
												<path
													fill="none"
													d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
												/>
											</svg>
										</span>
										<span className="tracking-wide">Education</span>
									</div>
									<ul className="list-inside space-y-2">
										<li>
											<div className="text-teal-600 dark:text-teal-400">
												Masters Degree in Oxford
											</div>
											<div className="text-gray-500 dark:text-gray-400 text-xs">
												March 2020 - Now
											</div>
										</li>
										<li>
											<div className="text-teal-600 dark:text-teal-400 ">
												Bachelors Degreen in LPU
											</div>
											<div className="text-gray-500 dark:text-gray-400 text-xs">
												March 2020 - Now
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
