import { useSelector } from 'react-redux'

export const Message = ({ username, message }) => {
	const user = useSelector((state) => state.user)
	const isCurrentUser = username === user.username

	const getContainerClass = () => {
		if (!username) return 'items-center justify-center'
		return isCurrentUser ? 'items-end justify-end' : 'items-end'
	}

	const getMessageClass = () => {
		if (!username) return 'bg-blue-600 text-white'
		return isCurrentUser
			? 'rounded-lg inline-block rounded-br-none bg-blue-600 text-white'
			: 'rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'
	}

	const getOrder = () => {
		return isCurrentUser ? 'order-1' : 'order-2'
	}

	return (
		<>
			<div className="chat-message">
				<div className={`flex ${getContainerClass()}`}>
					<div
						className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${getOrder()} ${
							isCurrentUser ? 'items-end' : 'items-start'
						}`}
					>
						<div>
							<span
								className={`px-4 py-2 rounded-lg inline-block ${getMessageClass()}`}
							>
								{username && <strong>{username}:</strong>} {message}
							</span>
						</div>
					</div>
					{!username && !isCurrentUser && (
						<img
							src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
							alt="My profile"
							className="w-6 h-6 rounded-full order-1"
						/>
					)}
					{isCurrentUser && (
						<img
							src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
							alt="My profile"
							className="w-6 h-6 rounded-full order-2"
						/>
					)}
				</div>
			</div>
		</>
	)
}
