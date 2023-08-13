/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				}
			},
			fontFamily: {
				'montserrat': ['"Montserrat", Sans-serif']
			},
			animation: {
				fadeIn: "fadeIn 2.5s ease-in forwards",
				cursor: 'cursor .6s linear infinite alternate',
				type: 'type 1.8s ease-out .8s 1 normal both',
				'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
			},
			keyframes: {
				fadeIn: {
				  "0%": { opacity: 0 },
				  "100%": { opacity: 1 }
				},
				type: {
					'0%': { width: '0ch' },
					'5%, 10%': { width: '1ch' },
					'15%, 20%': { width: '2ch' },
					'25%, 30%': { width: '3ch' },
					'35%, 40%': { width: '4ch' },
					'45%, 50%': { width: '5ch' },
					'55%, 60%': { width: '6ch' },
					'65%, 70%': { width: '7ch' },
					'75%, 80%': { width: '8ch' },
					'85%, 90%': { width: '9ch' },
					'95%': { width: '10ch' },
				  }
			},
			variants: {
				animation: ["motion-safe"]
			}
		}
	}
};
