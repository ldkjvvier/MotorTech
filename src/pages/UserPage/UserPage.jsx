import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import Chat from '../../components/Chat/Chat'
import { useSelector } from 'react-redux'

export const UserPage = () => {
	const usuario = useSelector((state) => state.user)
	return (
		<>
			<Header />
			<div className="h-screen flex ">
				{/* <Chat /> */}
				<section>
					<p>Tarjeta de usuario</p>
					<ul className="bg-black">
						<li>Nombre: {usuario.username}</li>
						<li>Apellido: {usuario.lastname}</li>
						<li>Correo: {usuario.email}</li>
						<li>ID: {usuario.id}</li>
						<li>
							<img
								src={usuario.avatar}
								alt="avatar"
								className="h-10 w-10 rounded-full"
							/>
						</li>
					</ul>
				</section>
			</div>
			<Footer />
		</>
	)
}
