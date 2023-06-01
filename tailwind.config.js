/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			'Space-Grotesk': ['Space Grotesk', 'sans-serif'],
			'Contrail-One': ['Contrail One', 'cursive'],
		},
		extend: {
			colors: {
				pinkish: '#EA0954',
			},
		},
	},
	plugins: [],
};
