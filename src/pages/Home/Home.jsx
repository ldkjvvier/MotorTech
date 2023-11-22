import { HeaderHome } from './Components/Header'
import { Footer } from '../../components/footer'
import { Carousel } from 'flowbite-react'
import { Hat, Info, Msg } from '../../components/Icons'




export const Home = () => {
	return (
		<>
			<HeaderHome />

			<main className="min-h-screen">
				{/*Aqui comienza el carrusel */}
				<div className="h-56 sm:h-[32rem] xl:h-[42rem]">
					<Carousel slide={false}>
						<img src="/images/Fondo-taller.jpg" alt="..." />
						<img src="/images/Fondo-taller2.jpg" alt="..." />
					</Carousel>
				</div>
				{/*Aqui Termina el carrusel */}

				{/*Aqui comienza la publicidad de la franja lila */}
				<div className="flex justify-around bg-indigo-600/60 opacity-80 py-10">
					<div className="flex flex-col">
						<Hat />
						<p>Enseñanza</p>
					</div>
					<div className="flex flex-col">
						<Msg />
						<p>mensajeria</p>
					</div>
					<div className="flex flex-col">
						<Info />
						<p>Informacion</p>
					</div>
				</div>
				{/*Aqui termina el contenido de la franja lila */}
				<section className="flex flex-col md:flex-row">
					<article className="px-9 md:w-1/2 bg-violet-100/20">
						<h1 className="text-justify font-serif mt-10 font-semibold text-gray-950">
							Sobre
						</h1>
						<h2 className="text-indigo-600/50 font-serif font-bold">
							MOTORTECH
						</h2>
						<hr className="border-blue-600 mt-8 mr-8"></hr>
						<p className="text-justify text-neutral-600 font-serif mt-10 font-medium mr-3 pb-10">
							En el año 2007, se funda MotorTech, con el objetivo de
							brindar un servicio de calidad en la reparación y
							mantenimiento de vehículos, con la mejor tecnología y
							personal altamente calificado.
						</p>
					</article>
					<article className="md:w-1/2">
						<img
							src="/images/Mecanico-section.jpeg"
							alt="Mecanico"
							className="h-full w-full object-cover"
						/>
					</article>
				</section>
			</main>

			<Footer />
		</>
	)
}
