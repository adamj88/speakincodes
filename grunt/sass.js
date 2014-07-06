module.exports = {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'dist/css/styles.css': 'src/scss/styles.scss'
        }
    },
    dev: {
        options: {
            sourcemap: true,
            style: 'expanded',
        },
        files: {
            'dist/css/styles.css': 'src/scss/styles.scss'
        }
    }
};