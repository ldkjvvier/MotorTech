export const Services = ({children}) => {
	const callouts = [
		{
			name: 'Lavado de autos',
			description: 'Limpieza completa de tu vehiculo',
			imageSrc:
				'https://img.freepik.com/foto-gratis/lavadora-profesional-uniforme-azul-lavado-coches-lujo-pistola-agua-tunel-lavado-al-aire-libre_496169-333.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700438400&semt=ais',
			imageAlt: '',
			href: '#',
		},
		{
			name: 'Revision de vehiculos',
			description: 'Diagnostico completo de tu vehiculo',
			imageSrc:
				'https://static.retail.autofact.cl/blog/c_url_original.fcm781k38a46h4.jpg',
			imageAlt:
				'Collection of four insulated travel bottles on wooden shelf.',
			href: '#',
		},
		{
			name: 'Mantencion de vehiculos',
			description: 'Mantencion completa de tu vehiculo',
			imageSrc:
				'https://www.mantencionexpress.cl/wp-content/uploads/2018/03/mantencion-vehiculo.jpg',
			imageAlt:
				'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
			href: '#',
		},
		{
			name: 'Cambios de aceite',
			description: 'Cambio de aceite de tu vehiculo',
			imageSrc:
				'https://practicatest.cl/static/img/cl/blog/como-cambiar-aceite-auto.jpg',
			imageAlt:
				'Collection of four insulated travel bottles on wooden shelf.',
			href: '#',
		},
		{
			name: 'Reemplazo de piezas',
			description: 'Remplazo de piezas de tu vehiculo',
			imageSrc:
				'https://sergioescobar.cl/wp-content/uploads/2022/05/sstt-min.jpg',
			imageAlt:
				'Collection of four insulated travel bottles on wooden shelf.',
			href: '#',
		},
		{
			name: 'Alineacion de vehiculos',
			description: 'Alineacion de tu vehiculo',
			imageSrc:
				'https://dercocenter-api.s3.us-east-1.amazonaws.com/medias/dercocenter/migration/news/alineacion-ruedas.jpg',
			imageAlt:
				'Collection of four insulated travel bottles on wooden shelf.',
			href: '#',
		},
	]

	return (
		<>
			<section className="flex w-full justify-center items-center">
				<div className=" dark:bg-transparent w-full">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
						<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
							<h2 className="text-5xl font-bold text-gray-800 dark:text-white">
								Nuestros Servicios
							</h2>

							<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
								{callouts.map((callout) => (
									<div
										key={callout.name}
										className="group relative pb-8"
									>
										<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 group-hover:opacity-80 sm:h-64 transition duration-300">
											<img
												src={callout.imageSrc}
												alt={callout.imageAlt}
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<h3 className="mt-6 text-sm text-gray-500 dark:text-gray-400">
											<a href={callout.href}>
												<span className="absolute inset-0" />
												{callout.name}
											</a>
										</h3>
										<p className="text-base font-semibold text-gray-900 dark:text-gray-300">
											{callout.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			{children}
		</>
	)
}
