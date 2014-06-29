module.exports = {
    dist: {
        files: {
            'dist/css/styles.css': 'src/scss/styles.scss'
        }
    },
    dev: {
        options: {
            sourceMap: true
        },
        files: {
            'dist/css/styles.css': 'src/scss/styles.scss'
        }
    }
};