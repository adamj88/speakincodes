module.exports = {
	options: {
		livereload: true
	},
	grunt: {
	    files: [ 'Gruntfile.js', 'grunt/*.{js,yaml}'],
	    tasks: ['jshint'],
		options: {
			reload: true
		}
	},
	css: {
		files: 'dist/**/*.css'
	},
	jekyll: {
		files: 'src/**/*.{md,markdown,html,textile}',
		tasks: ['jekyll:dist'],
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