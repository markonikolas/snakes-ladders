/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/*.ts', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: 'Comic Neue',
			},
		},
	},
	/**
	 * Purgecss whitelist patterns
	 * not working properly, so whitelisting
	 * up to 12x12 grid mesh for the board.
	 */
	safelist: [
		// grid cols & rows
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

		// colors
		'bg-green-300',
		'bg-red-300',
		'bg-amber-300',
		'bg-indigo-300',
		'bg-orange-300',
		'bg-yellow-300',
		'bg-emerald-300',
		'bg-purple-300',
		'bg-amber-300',
		'bg-pink-300',
		'bg-rose-300',
		'bg-teal-300',
		'bg-blue-300',
		'bg-violet-300',
		'bg-cyan-300',
	],
	plugins: [],
};
