const path = require('path');

const requirejs = {
    compile: {
        options: {
            baseUrl: 'src',
            mainConfigFile: 'src/require.config.js',
            almond: true,
            name: path.join(__dirname, 'node_modules/almond/almond.js'),
            include: ['main'],
            out: 'build/bundle.js',
            optimize: 'none',
            generateSourceMaps: true
        }
    }
};

module.exports = (grunt) => {
    grunt.initConfig({
        requirejs
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ['requirejs']);
};
