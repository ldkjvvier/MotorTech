import { Login } from './pages/LoginPage/login'
import { UserPage } from './pages/UserPage/UserPage'
import { Error404 } from './pages/404/404'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		// definimos las rutas de nuestra aplicación
		<Routes>
			<Route path="" element={<Login />} />
			<Route path="motortech-cl" element={<UserPage />} />

			{/* Ruta para manejar si la pagina no se encuentra */}
			<Route
				path="*"
				element={<Error404/>}
			/>
		</Routes>
	)
}
