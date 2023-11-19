import { Login } from './pages/Account/login'
import { UserPage } from './pages/UserPage/UserPage'
import { Profile } from './components/Profile'
import { Header } from './components/header'
import { Footer } from './components/footer'
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
				<main className="h-screen dark:bg-slate-900 ">
					<Routes>
						<Route
							path="motortech-cl/"
							element={<UserPage />}
							exact
						/>
						<Route
							path="motortech-cl/profile"
							element={<Profile />}
							exact
						/>
						<Route path="*" element={<Error404 />} />
					</Routes>
				</main>
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
