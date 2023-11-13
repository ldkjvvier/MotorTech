import { Login } from './pages/Account/login'
import { UserPage } from './pages/UserPage/UserPage'
import { Error404 } from './pages/404/404'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const App = () => {
	const user = useSelector((state) => state.user)
	// Rutas privadas
	if (user.id !== 'undefined') {
		return (
			<Routes>
				<Route path="/" element={<Login />} exact />
				<Route path="motortech-cl" element={<UserPage />} exact />
			</Routes>
		)
	} else {
		// Rutas publicas
		return (
			<Routes>
				<Route path="" element={<Login />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		)
	}
}
