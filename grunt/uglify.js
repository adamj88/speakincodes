module.exports = {
	dist: {
		options: {
			// sourceMap: true,
			compress: {
				drop_console: true
			}
		},
		files: {
			'dist/js/app.js': ['src/js/**/*.js']
		}
	},
	dev: {
		options: {
			sourceMap: true,
		},
		files: {
			'dist/js/app.js': ['src/js/**/*.js']
		}
	}
};