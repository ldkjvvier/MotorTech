import { Header } from '../../components/Header/header'
import { Footer } from '../../components/Footer/footer'
import Chat from '../../components/Chat/Chat'
import { useSelector } from 'react-redux'

export const UserPage = () => {
	const user = useSelector((state) => state.user)


	return (
		<>
			<Header />

			<main className="h-screen flex ">
				{/* <Chat /> */}
				<section className=''>
					<p className="text-black">Tarjeta de usuario</p>
					<ul className="bg-black">
						<li>Nombre: {user.username}</li>
						<li>Apellido: {user.lastname}</li>
						<li>Correo: {user.email}</li>
						<li>ID: {user.id}</li>
						<li>
							<img
								src={user.avatar}
								alt="avatar"
								className="h-10 w-10 rounded-full"
							/>
						</li>
					</ul>
				</section>
			</main>

			<Footer />
		</>
	)
}
