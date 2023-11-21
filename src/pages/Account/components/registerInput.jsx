export const RegisterInput = ({
	label,
	id,
	name,
	type,
	placeholder,
	required,
}) => {
	return (
		<>
			<div className="flex-justify-between">
				<label
					htmlFor={id}
					className="block text-sm font-medium leading-7 dark:text-gray-900 text-gray-200"
				>
					{label}
				</label>
			</div>
			<div className="mt-2">
				<input
					id={id}
					name={name}
					type={type}
					autoComplete="off"
					minLength={type === 'password' ? 6 : null}
					placeholder={placeholder}
					required={required}
					className="block w-full rounded-md border-0 p-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</>
	)
}

import PropTypes from 'prop-types'

RegisterInput.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
}
