module.exports = {
	dist: {
		options: {
			removeComments: true,
			collapseWhitespace: true
		},
		expand: true,
		cwd: 'dist',
        src: ['**/*.html'],
        dest: 'dist',
        ext: '.html'
	}
};