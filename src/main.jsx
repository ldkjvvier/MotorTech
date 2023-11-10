import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import './index.css'


import { App } from './App.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
	// BrowserRouter es un componente que nos permite
	// definir las rutas de nuestra aplicación
	<React.StrictMode>
		<BrowserRouter>
			{/* Provider es un componente que nos permite
			inyectar el store de redux a nuestra aplicación */}
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	
)
