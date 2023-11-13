import { useDispatch } from 'react-redux'
import { removeUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
export const Logout = ({ children }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(removeUser())
		navigate('/', { replace: true })
	}
	return <div onClick={handleClick}>{children}</div>
}
