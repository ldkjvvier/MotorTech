import { Login } from './pages/Account/login'
import { UserPage } from './pages/UserPage/UserPage'
import { Profile } from './components/Profile/profile'
import { Header } from './components/Header/header'
import { Footer } from './components/Footer/footer'
import { Error404 } from './pages/404/404'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const App = () => {
	const user = useSelector((state) => state.user)
	// Rutas privadas
	if (user.id !== 'undefined') {
		return (
			<>
				<Header />
				<Routes>
					<Route path="motortech-cl/" element={<UserPage />} exact />
					<Route
						path="motortech-cl/profile"
						element={<Profile />}
						exact
					/>
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</>
		)
	} else {
		// Rutas publicas
		return (
			<Routes>
				<Route path="*" element={<Login />} />
			</Routes>
		)
	}
}
