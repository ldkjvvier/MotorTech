/*/** @type {import('tailwindcss').Config}*/
/* global require */

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'my-background': "url('404-background.png')",
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
