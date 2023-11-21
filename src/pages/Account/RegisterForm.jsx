import { Datepicker } from 'flowbite-react'
import { RegisterInput } from './components/registerInput'
export const FirstStep = () => {
	return (
		<>
			<RegisterInput
				label="Correo electronico"
				id="email"
				name="email"
				type="email"
				placeholder="Ingresa tu correo electronico"
				required
			/>

			<RegisterInput
				label="Contraseña"
				id="password"
				name="password"
				type="password"
				placeholder="Ingresa tu contraseña"
				required
			/>

			<RegisterInput
				label="Confirmar contraseña"
				id="password1"
				name="confirmPassword"
				type="password"
				placeholder="Reingresa tu contraseña"
				required
			/>

			<div className="flex items-center pt-3">
				<input
					id="link-checkbox"
					name="linkCheckbox"
					type="checkbox"
					value=""
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"
				/>
				<label
					htmlFor="link-checkbox"
					className="ms-2 text-sm font-medium dark:text-gray-900 text-gray-400"
				>
					I agree with the{' '}
					<a
						href="#"
						className="text-blue-600 dark:text-blue-500 hover:underline"
					>
						terms and conditions
					</a>
					.
				</label>
			</div>
		</>
	)
}
export const SecondStep = () => {
	return (
		<>
			<div className="mt-4">
				<RegisterInput
					label="Nombre de usuario *"
					id="username"
					name="username"
					type="text"
					placeholder="Felipe123"
					required
				/>
			</div>

			<div className="flex gap-3 mt-4">
				<div>
					<RegisterInput
						label="Nombre *"
						id="name"
						name="name"
						type="text"
						placeholder="Felipe"
						required
					/>
				</div>
				<div>
					<RegisterInput
						label="Apellido *"
						id="lastname"
						name="lastname"
						type="text"
						placeholder="Perez"
						required
					/>
				</div>
			</div>

			<div className="mt-4">
				<div className="flex justify-between">
					<label
						htmlFor="date"
						className="block text-sm font-medium leading-7 dark:text-gray-900 text-gray-200"
					>
						Fecha de nacimiento *
					</label>
				</div>
				<div className="mt-2">
					<Datepicker
						id="date"
						language="ESP"
						icon={false}
						labelTodayButton="Hoy"
						labelClearButton="Limpiar"
						minDate={new Date(1940, 0, 1)}
						maxDate={new Date(2005, 0, 1)}
					/>
				</div>
			</div>

			<div className="mt-4">
				<div className="flex justify-between">
					<label
						htmlFor="lastname"
						className="block text-sm font-medium leading-7 dark:text-gray-900 text-gray-200"
					>
						Género *
					</label>
				</div>
				<div className="mt-2">
					<select
						id="gender"
						name="gender"
						autoComplete="gender"
						className="block w-full rounded-md border-0 p-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					>
						<option value="femenino">Femenino</option>
						<option value="masculino">Masculino</option>
						<option value="otro">Otro</option>
					</select>
				</div>
			</div>

			<div className="mt-4">
				<RegisterInput
					label="Dirección *"
					id="address"
					name="address"
					type="text"
					placeholder="Ingresa tu dirección"
					required
				/>
			</div>

			<div className="mt-4">
				<RegisterInput
					label="Número de teléfono *"
					id="phone"
					name="phone"
					type="text"
					placeholder="9 1234 5678"
					required
				/>
			</div>

			{
				<p className="text-center text-red-500 text-xs font-semibold mt-5"></p>
			}
		</>
	)
}
