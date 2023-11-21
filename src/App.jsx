import { Login } from './pages/Account/login'
import { Register } from './pages/Account/Register'
import { UserPage } from './pages/UserPage/UserPage'
import { Profile } from './components/Profile'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Home } from './pages/Home/Home'
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
				<main className="h-full dark:bg-gradient-to-b from-slate-900 to-gray-800 ">
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
				<Route path="/" element={<Home />} />
				<Route path="Login" element={<Login />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		)
	}
}
