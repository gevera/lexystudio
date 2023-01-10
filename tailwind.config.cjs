const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#b29a87',

					secondary: '#baf1ff',

					accent: '#dd8f54',

					neutral: '#2C203C',

					'base-100': '#E6E4E7',

					info: '#50C5DC',

					success: '#4ED4A3',

					warning: '#F5990F',

					error: '#FC2C56'
				}
			}
		]
	},

	plugins: [forms, typography, daisyui]
};

module.exports = config;
