import { Header } from '../../components/Header/header'
import { Footer } from '../../components/Footer/footer'
import Chat from '../../components/Chat/Chat'
import ChatComponent from '../../components/Chat/ChatComponent'
import { useSelector } from 'react-redux'

export const UserPage = () => {
	const user = useSelector((state) => state.user)

	return (
		<>
			<Header />

			<main className="h-screen flex ">
				{/* <Chat /> */}
				<ChatComponent />
			</main>

			<Footer />
		</>
	)
}
