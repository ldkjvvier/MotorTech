import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import Chat from '../../components/Chat/Chat'
import { useEffect } from 'react'
import { api } from '../../constants'

export const UserPage = () => {
	useEffect(() => {
		document.title = 'MotorTech | Chat'
		fetch(`${api}/api/resena`, {
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
