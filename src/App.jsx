import { Login } from './pages/LoginPage/login'
import { UserPage } from './pages/UserPage/UserPage'
import { Route, Routes } from 'react-router-dom'
export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route
				path="*"
				element={<h1 className="text-black">Not Found</h1>}
			/>
			<Route path="motortech-cl" element={<UserPage />} />
		</Routes>
	)
}
