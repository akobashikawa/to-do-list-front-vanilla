// Karma configuration
// Generated on Fri Aug 26 2022 15:06:23 GMT-0500 (hora estándar de Perú)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // [Testing with es6 modules](https://devscope.io/code/karma-runner/karma/issues/3335)
    files: [
      // '*.js',
      // {pattern: '*.js', type: 'module', watched: true, served: true, included: true},
      { pattern: '**/*.js', type: 'module' },
      // 'test/**/*.js',
      // {pattern: 'test/**/*.js', type: 'module', watched: true, served: true, included: true},
      { pattern: './test/**/*.test.js', type: 'module' },
      { pattern: 'node_modules/**/*.js', included: false },
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}
