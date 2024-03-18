/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"JetBrains Mono"', 'monospace'],
				barlow: ['Barlow', 'sans-serif']
			}
		}
	},
	plugins: []
};
