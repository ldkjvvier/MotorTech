import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import Chat from '../../components/Chat/Chat'
import { useEffect } from 'react'

export const UserPage = () => {
	useEffect(() => {
		document.title = 'MotorTech | Chat'
		const res = fetch('http://localhost:1337//api/chats', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
	}, [])

	return (
		<>
			<Header />
			<div className="h-screen flex ">
				<Chat />
			</div>
			<Footer />
		</>
	)
}
