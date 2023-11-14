import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const ChatComponent = () => {
	const [socket, setSocket] = useState(null)
	const [username, setUsername] = useState('Javier')
	const [roomname, setRoomname] = useState('general')
	const [message, setMessage] = useState('hola')
	const [chat, setChat] = useState([])
	const [users, setUsers] = useState([])

	useEffect(() => {
		const newSocket = io('http://localhost:1337', {
			withCredentials: true,
			extraHeaders: {
				'my-custom-header': 'your-custom-value',
			},
		})

		newSocket.on('connect', () => {
			console.log('Socket connected')
		})

		newSocket.on('disconnect', () => {
			console.log('Socket disconnected')
			setChat([])
		})

		setSocket(newSocket)

		return () => {
			newSocket.disconnect()
		}
	}, [])

	useEffect(() => {
		if (socket) {
			socket.on('message', (data) => {
				if (data.message) {
					console.log('dentro')
					// Usa la propiedad messageData para actualizar el estado del chat
					setChat((prevChat) => [
						...prevChat,
						{
							userId: data.userId,
							username: data.username,
							message: data.message,
						},
					])
				}
			})

			socket.on('roomUsers', (data) => {
				setUsers(data.users)
			})
		}
	}, [socket])

	const handleJoin = () => {
		if (username && roomname) {
			socket.emit('joinRoom', { username, roomname })
			socket.on('getChat', (data) => {
				setChat(
					data.messageData.map((message) => ({
						userId: message.user,
						username: message.user,
						message: message.message,
					}))
				)
			})
		}
	}

	const handleSendMessage = () => {
		if (message) {
			socket.emit('chat', message)
		}
	}

	return (
		<div className="chat-container bg-black">
			<div className="room-info">
				<h2>Chat Room: {roomname}</h2>
				<div>
					Usuarios en la sala:{' '}
					{users.map((user) => user.username).join(', ')}
				</div>
			</div>
			<div className="chat-box">
				{chat.map((msg, index) => (
					<div key={index}>
						<strong>{msg.username}:</strong> {msg.message}
					</div>
				))}
			</div>
			<div className="input-box">
				<input
					type="text"
					className="text-black"
					placeholder="Enter your username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Enter room name"
					className="text-black"
					value={roomname}
					onChange={(e) => setRoomname(e.target.value)}
				/>
				<button onClick={handleJoin}>Join</button>
				<div>
					<input
						type="text"
						placeholder="Type your message"
						className="text-black"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button onClick={handleSendMessage}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default ChatComponent
