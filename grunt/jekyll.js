module.exports = {
	options: {
		bundleExec: true,
		src: 'src'
	},
	dist: {
		options: {
			dest: 'dist'
		}
	},
	serve: {
		options: {
			dest: 'dist',
			serve: true
		}
	}
};