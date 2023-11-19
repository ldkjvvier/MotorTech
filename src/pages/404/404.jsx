import { Link } from 'react-router-dom'

export const Error404 = () => {
	return (
		/* Image background  */
		<main className="grid min-h-screen place-items-center ">
			{/* bg-my-background  */}
			<div className="text-center flex flex-col items-center pb-20">
				<img src="/404.png" className="h-28 w-auto ml-6 mb-6"></img>
				<p className="font-semibold text-indigo-600 text-7xl">404</p>
				<h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-400 sm:text-5xl">
					¿¡OOOOOOPS!?
				</h1>
				<p className="mt-6 text-base leading-7 text-gray-600">
					¿Donde te has metido? rápido, vuelve con nosotros
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						to="/"
						className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Volver a casa
					</Link>
					<a href="#" className="text-sm font-semibold text-gray-900">
						Contacto <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
		</main>
	)
}
