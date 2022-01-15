module.exports = {
  	content: ["./app/**/*.{ts,tsx}"],
  	theme: {
		colors: {
			black: {
				000: '#000',
				900: '#151928',
				600: '#343A53',
				300: '#5B5E69',
				200: '#B3B6BF',
				100: '#E1E2E5',
			},
			blue: {
				600: '#1D09B8',
				400: '#3E27F4'
			},
			white: "#fff",
		},
    	extend: {
			fontSize: {
				sm: ['.75rem', {lineHeight: 1.1}],
				md: ['.875rem', {lineHeight: 1.1}],
				body: ['1rem', {lineHeight: 1.25}],
				lg: ['1.325rem', {lineHeight: 1.1}],
				xl: ['2rem', {lineHeight: 1.1}],
			}
		},
  	},
  	plugins: [],
}
