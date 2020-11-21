const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html', './public/**/*.js'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				lightblue: colors.lightBlue,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
