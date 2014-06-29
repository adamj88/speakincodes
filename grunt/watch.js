module.exports = {
	options: {
		livereload: true
	},
	css: {
		files: 'dist/**/*.css'
	},
	jekyll: {
		files: 'src/**/*.{md,markdown,html,textile}',
		tasks: ['jekyll:dist']
	},
	scss: {
		files: 'src/scss/**/*.scss',
		tasks: ['sass:dev']
	}
};