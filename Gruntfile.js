module.exports = function(grunt) {

	// measures the time each task takes
	require('time-grunt')(grunt);

	// load grunt config
	require('load-grunt-config')(grunt);

	// load grunt tasks from grunt/ dir
	require('load-grunt-tasks')(grunt);

};