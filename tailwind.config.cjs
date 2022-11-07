/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'cyan': 'hsl(186, 34%, 60%);',
			'soft-red': 'hsl(10, 79%, 65%);',
			'cream': 'hsl(27, 66%, 92%);',
			'pale-orange': 'hsl(33, 100%, 98%);',
			'dark-brown': 'hsl(25, 47%, 15%);',
			'medium-brown': 'hsl(28, 10%, 53%);',
			'white': 'hsl(0, 100%, 100%);',
		},
		extend: {

		},
	},
	plugins: [],
}