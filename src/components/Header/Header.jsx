export const Header = () => {

	return (
		<header>
			<nav className="flex flex-col md:flex-row justify-between p-3 bg-gray-800">
				<article>
					<h3 className="text-white font-bold">MotorTech</h3>
				</article>
				<section>
					<ul className="flex gap-3 text-center">
						<li>
							<a href="motortech-cl">Inicio</a>
						</li>
						<li>
							<a href="motortech-cl">Servicios</a>
						</li>
						<li>
							<a href="motortech-cl">Contacto</a>
						</li>
						<li>
							<a href="motortech-cl">Usuario</a>
						</li>
					</ul>
				</section>
			</nav>
		</header>
	)
}
