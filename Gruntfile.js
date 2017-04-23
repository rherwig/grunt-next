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

const requirejsModules = {
    compile: {
        options: {
            baseUrl: 'src',
            mainConfigFile: 'src/require.config.js',
            modules: [{
                name: 'main',
                include: [
                    '../node_modules/almond/almond.js'
                ]
            }],
            dir: 'build',
            optimize: process.env.NODE_ENV === 'production' ? 'uglify2' : 'none',
            generateSourceMaps: true
        }
    }
};

module.exports = (grunt) => {
    grunt.initConfig({
        requirejs: requirejsModules
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ['requirejs']);
};
