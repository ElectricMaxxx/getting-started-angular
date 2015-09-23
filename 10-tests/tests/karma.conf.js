module.exports = function(config){
    config.set({

        basePath : '../../',

        files : [
            '../samples-getting-started/bower_components/angular/angular.js',
            '../samples-getting-started/bower_components/angular-mocks/angular-mocks.js',

            '10-tests/app.js',

            '10-tests/**/*.js',
            '10-tests/tests/unit/**/*Spec.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-html-reporter',
            'karma-story-reporter',
            'karma-jasmine'
        ],

        htmlReporter: {
            outputDir: 'karma_html', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs


            // experimental
            preserveDescribeNesting: false, // folded suites stay folded
            foldAll: false // reports start folded (only with preserveDescribeNesting)
        },

        reporters: ['html', 'story'],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
