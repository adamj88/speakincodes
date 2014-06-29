module.exports = {
	options: {
		clean: true,
	},
	scss: {
		options: {
			destPrefix: 'src/scss'
		},
		files: {
			// Foundation
			'': 'foundation/scss/foundation/_settings.scss',
			'foundation/': 'foundation/scss/foundation/_functions.scss',
			'foundation/components/': 'foundation/scss/foundation/components/*.scss',
			// Font Awesome
			'fontawesome/': 'fontawesome/scss/**/*.scss' 
		}
	},
	js: {
		options: {
			destPrefix: 'src/js'
		},
		files: {
			// Foundation
			'': 'foundation/js/foundation.js',
			'foundation': 'foundation/js/foundation/**.js',
			'jquery.js': 'jquery/dist/jquery.js',
			'jquery.placeholder.js': 'jquery-placeholder/jquery.placeholder.js',
			'jquery.cookie.js': 'jquery.cookie/jquery.cookie.js',
			'modernizr.js': 'modernizr/modernizr.js',
			'fastclick.js': 'fastclick/lib/fastclick.js',
		}
	},
    fonts: {
        options: {
            destPrefix: 'src/fonts'
        },
        files: {
            // Font Awesome
            '': 'fontawesome/fonts/*' 
        }
    }
};