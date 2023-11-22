import { Ticket } from './Icons'

const callouts = [
	{
		name: 'Cambio de Aceite',
		price: 'Desde $39.990',
		className: 'bg-gray-700/90 text-gray-300',
		services: [
			'Aceite Liqui Moly',
			'Filtro de aceite',
			'1L Agua limpia parabrisas',
			'Prueba de ruta',
			'Lavado de auto',
		],
	},
	{
		name: 'Mantenimiento Express',
		price: 'Desde $104.990',
		className: 'bg-slate-800 text-white',
		services: [
			'Aceite Liqui Moly',
			'Filtro de aceite',
			'Filtro de aire',
			'Filtro de polen',
			'1L Agua limpia parabrisas',
			'Relleno de niveles',
			'Escaner automotriz',
			'Prueba de ruta',
			'Lavado de auto',
		],
	},
	{
		name: 'Mantenimiento con Pauta',
		price: 'Desde $184.990',
		className: 'bg-rose-700',
		services: [
			'Mantenimiento express',
			'Revisión de instrumentos',
			'Revisión de sistema de frenos',
			'Revisión de tren delantero',
			'Revisión de tren trasero',
			'Revisión sistema de dirección',
			'Revisión sistema de suspensión',
			'Revisión de estado de los bajos',
			'Revision de neumaticos',
			'Pruena de ruta',
			'Informe de estado',
			'Lavado',
		],
	},
]

export const PremiumServices = () => {
	return (
		<section className="flex w-full justify-center items-center">
			<div className=" dark:bg-transparent w-full">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
					<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
						<h2 className="text-5xl font-bold text-gray-800 dark:text-white">
							Servicios Premium
						</h2>

						<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
							{callouts.map((callout) => (
								<div key={callout.name} className="h-min text-white">
									<div
										className={`p-6 ${callout.className} rounded-2xl border border-gray-300 shadow-xl drop-shadow-xl`}
									>
										<h3 className="text-2xl text-center font-bold text-white dark:text-white">
											{callout.name}
										</h3>
										<h4 className="text-lg text-center mt-0 text-gray-200 dark:text-gray-300 font-semibold ">
											{callout.price}
										</h4>
										<ul className="mt-4 text-lg  dark:text-gray-200 font-medium">
											{callout.services.map((service, key) => (
												<li key={key} className="pb-2 flex">
													<span>
														<Ticket />
													</span>
													<span className="font-semibold">{service}</span>
												</li>
											))}
										</ul>
                    <button>
                      <a href="https://api.whatsapp.com/send?phone=56986813896&text=Hola!%20Quisiera%20solicitar%20un%20servicio%20premium%20para%20mi%20veh%C3%ADculo%20con%20ustedes.">
                        <div className="flex justify-center">
                          <span className="text-center text-white bg-slate-900 rounded-lg px-4 py-2 mt-4 font-semibold">
                            Solicitar
                          </span>
                        </div>
                      </a>
                    </button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
