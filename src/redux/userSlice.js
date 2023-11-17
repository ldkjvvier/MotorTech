import { createSlice } from '@reduxjs/toolkit'

// Este es el estado inicial del slice
const initialState = {
	id: 'undefined',
	username: 'undefined',
	lastname: 'undefined',
	email: 'undefined',
	direccion: 'undefined',
	telefono: 'undefined',
	genero: 'undefined',
	nacimiento: 'undefined',
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
      const { id, username, lastname, email, direccion, telefono, genero, nacimiento, createdAt, avatar } = action.payload
      state.id = id
      state.username = username
      state.lastname = lastname
      state.email = email
			state.direccion = direccion
			state.telefono = telefono
			state.genero = genero
			state.nacimiento = nacimiento
			state.fecha_creacion = createdAt
      state.avatar = avatar
		},
    // Este reducer se encarga de eliminar los datos del usuario
		removeUser: () => {
			localStorage.removeItem('token')
			return initialState;
		},
	},
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer
