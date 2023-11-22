import { HeaderHome } from './Components/Header'
import { Footer } from '../../components/footer'

const images = [
	{
		src: '/images/Certificado-icon.png',
		alt: 'Check',
	},
	{
		src: '/images/Msg-icon.png',
		alt: 'Msg',
	},
	{
		src: '/images/Info-icon.png',
		alt: 'Check',
	},
]

export const Home = () => {
	return (
		<>
			<HeaderHome />

			<main className="min-h-screen">
				{/*Aqui comienza el carrusel */}
				<div className="h-56 sm:h-[32rem] xl:h-[42rem]">
					<img
						className="h-full w-full object-cover"
						src="/images/mecanico-portada.png"
						alt="Carrousel"
					/>
				</div>
				{/*Aqui Termina el carrusel */}

				{/*Aqui comienza la publicidad de la franja lila */}
				<div className="flex justify-around bg-indigo-600/60 dark:bg-red-900/70 opacity-80 py-10">
					{images.map((image) => (
						<img
							key={image.src}
							src={image.src}
							alt={image.alt}
							className={'h-12 w-auto md:h-24 scale-150'}
						/>
					))}
				</div>
				{/*Aqui termina el contenido de la franja lila */}
				<section className="flex flex-col md:flex-row">
					<article className="px-9 md:w-1/2 bg-violet-100/20 dark:bg-slate-800">
						<h1 className="text-justify font-serif mt-10 font-semibold text-gray-950 dark:text-violet-400">
							Sobre
						</h1>
						<h2 className="text-indigo-600/50 font-serif font-bold dark:text-slate-300">
							MOTORTECH
						</h2>
						<hr className="border-blue-600 mt-8 mr-8 dark:border-red-300"></hr>
						<p className="text-justify text-neutral-600 font-serif mt-10 font-medium mr-3 pb-10 dark:text-slate-300/90">
							En el año 2007, se funda MotorTech, con el objetivo de
							brindar un servicio de calidad en la reparación y
							mantenimiento de vehículos, con la mejor tecnología y
							personal altamente calificado. <br />
							<br />
							<p className="font-semibold text-2xl text-violet-400 border-dashed border-2 rounded-md border-red-400 dark:border-red-600 p-3 dark:text-slate-200">
								Recuerda, un auto no es solo una herramienta, es{' '}
								<a class="underline decoration-yellow-300 underline decoration-wavy dark:decoration-purple-400">
									parte de la familia.
								</a>
							</p>
						</p>
					</article>
					<article className="md:w-1/2">
						<img
							src="/images/mecanico-section.jpg"
							alt="Mecanico"
							className="h-full w-full object-cover"
						/>
					</article>
				</section>
				<section className="dark:bg-slate-800">
					<div className="flex lg:flex-1"></div>
					<div className="flex lg:hidden"></div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
					<div className="mt-6 flow-root">
						<hr className="border-violet-900 mx-auto w-1/2 opacity-50 dark:border-red-300 md:dark:opacity-30"></hr>
						<div className="-my-6 divide-y divide-gray-500/10"></div>
					</div>
					<div className="py-6"></div>
					<div className="relative isolate px-6 pt-14 lg:px-8">
						<div
							className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
							aria-hidden="true"
						>
							<div
								className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
								style={{
									clipPath:
										'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
								}}
							/>
						</div>
						<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
							<div className="hidden sm:mb-8 sm:flex sm:justify-center">
								<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-gray-300 hover:ring-purple-900/60 dark:text-slate-300 dark:hover:ring-white dark:ring-red-400">
									Si quieres conocer más sobre nosotros visita nuestro
									sitio.{' '}
									<a
										href="#"
										className="font-semibold text-indigo-500 dark:text-purple-400"
									>
										<span
											className="inset-0 pl-0.5"
											aria-hidden="true"
										/>
										Leer más <span aria-hidden="true">&rarr;</span>
									</a>
								</div>
							</div>
							<div className="text-center">
								<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-slate-200">
									Deja tu auto con los mejores profesionales
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400/90">
									Preparate para un servicio de calidad, con la mejor
									tecnología y personal altamente calificado.
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6">
									<a
										href="Login"
										className="rounded-md bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-red-500 dark:hover:bg-indigo-600 dark:focus-visible:outline-red-600 dark:focus-visible:outline-offset-red-600 dark:focus-visible:outline-red-600 dark:focus-visible:outline-2-red-600 dark:focus-visible:outline-offset-2-red"
									>
										Iniciar
									</a>
									<a
										href="#"
										className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100"
									>
										Leer más <span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	)
}
