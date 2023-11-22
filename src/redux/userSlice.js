import { createSlice } from '@reduxjs/toolkit'

// Este es el estado inicial del slice
const initialState = {
	id: 'undefined',
	username: 'undefined',
	name: 'undefined',
	lastname: 'undefined',
	email: 'undefined',
	address: 'undefined',
	phone: 'undefined',
	gender: 'undefined',
	date: 'undefined',
	createdAt: 'undefined',
	avatar:
		'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
}

// Este slice se encarga de almacenar los datos del usuario
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// Este reducer se encarga de almacenar los datos del usuario
		addUser: (state, action) => {
			const {
				id,
				username,
				name,
				lastname,
				email,
				address,
				phone,
				gender,
				date,
				createdAt,
				avatar,
			} = action.payload
			state.id = id
			state.username = username
			state.name = name
			state.lastname = lastname
			state.email = email
			state.address = address
			state.phone = phone
			state.gender = gender
			state.date = date
			state.fecha_creacion = createdAt
			state.avatar = avatar
		},
		// Este reducer se encarga de eliminar los datos del usuario
		removeUser: () => {
			localStorage.removeItem('token')
			return initialState
		},
	},
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer
