/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/*.ts', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	/**
	 * Purgecss whitelist patterns
	 * not working properly, so whitelisting
	 * up to 12x12 grid mesh for the board.
	 */
	safelist: [
		'grid-cols-4',
		'grid-rows-4',
		'grid-cols-5',
		'grid-rows-5',
		'grid-cols-6',
		'grid-rows-6',
		'grid-cols-7',
		'grid-rows-7',
		'grid-cols-8',
		'grid-rows-8',
		'grid-cols-9',
		'grid-rows-9',
		'grid-cols-10',
		'grid-rows-10',
		'grid-cols-11',
		'grid-rows-11',
		'grid-cols-12',
		'grid-rows-12',
	],
	plugins: [],
};
