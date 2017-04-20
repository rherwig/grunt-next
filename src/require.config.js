requirejs.config({
    baseUrl: './',
    paths: {
        es6: './es6',
        jquery: '../node_modules/jquery/dist/jquery'
    },
    babel: {
        fileExtension: '.js',
        sourceMaps: 'inline'
    }
});