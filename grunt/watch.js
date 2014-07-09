module.exports = {
	options: {
		livereload: true,
		interupt: true
	},
	grunt: {
	    files: [ 'Gruntfile.js', 'grunt/*.{js,yaml}'],
	    tasks: ['jshint:grunt'],
		options: {
			reload: true
		}
	},
	css: {
		files: 'dist/**/*.css'
	},
	jekyll: {
		files: 'src/**/*.{md,markdown,html,textile,rb}',
		tasks: ['jekyll:dist', 'sass:dev']
	},
	js:  {
		files: 'src/js/**/*.js',
		tasks: ['uglify:dev'],
		options: {
			atBegin: true
		}
	},
	scss: {
		files: 'src/scss/**/*.scss',
		tasks: ['sass:dev'],
		options: {
			atBegin: true
		}
	}
};