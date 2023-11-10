import { Login } from './pages/LoginPage/login'
import { UserPage } from './pages/UserPage/UserPage'
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
				element={<h1 className="text-black">Not Found</h1>}
			/>
		</Routes>
	)
}
