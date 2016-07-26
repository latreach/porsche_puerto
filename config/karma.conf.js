module.exports = function (config) {
    var testWebpackConfig = require('./webpack.test');

    config.set({
        /* Base Path that will be used to resolve all patterns 
         * e.g. files, exclude
         */
        basePath: '',

        /* Frameworks to use
         * https://npmjs.org/browse/keyword/karma-adapter
         * */
        frameworks: [ 'jasmine' ],

        /* List of files to exclude */
        exclude: [ ],

        /* List of files/patterns to load in the browser 
         * We are building the test environment in ./spec-bundle.js
         */
        files: [
            {
                pattern: './config/karma-test-shim.js',
                watched: false
            }
        ],

        /* Preprocess matching files before serving them to the browser
         * https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: {
            './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
        },
        
        /* Webpack testing configuration */
        webpack: testWebpackConfig,

        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'json' },
                { type: 'html' }
            ]
        },

        /* Webpack Server Configuration 
         * Don't send messages to console using karma
         */
        webpackServer: {
            noInfo: true
        },

        /* Test results reporter to use 
         * Posible values: dots, progress
         * https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: [ 'mocha', 'coverage' ],

        /* Web Server Port */
        port: 9876,

        /* Enable/Disable color in the output (reporters and logs) */
        colors: true,

        /* Level of logging
         * Possible values: config.LOG_DISABLE || config.LOG_ERROR ||
         * config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_INFO,

        /* Enable/Disable watching file and executing tests whenever any file
         * changes
         */
        autowatch: false,

        /* Start browsers
         * https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [ 'PhantomJS' ],

        /* Continuous Integration mode
         * If true, Karma captures browsers, runs the tests and exits
         */
        singleRun: true

    });
};
