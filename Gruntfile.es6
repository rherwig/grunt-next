import { join } from 'path';

export default (grunt) => {

    grunt.initConfig({
        requirejs: requirejs()
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ['requirejs']);
};

const requirejs = () => {

    return {
        compile: {
            options: {
                baseUrl: 'src',
                mainConfigFile: 'src/require.config.js',
                almond: true,
                name: join(__dirname, 'node_modules/almond/almond.js'),
                include: ['main'],
                out: 'build/bundle.js',
                optimize: 'none'
            }
        }
    };
};
