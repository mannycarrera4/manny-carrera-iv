// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: './',
    paths: {
        'jquery': 'assets/vendor/jquery/dist/jquery.min',
        'foundation': 'assets/vendor/foundation-sites/dist/foundation.min'
    },
    shim: {
        'foundation': {
            'deps': ['jquery'],
            'exports': ['Foundation']
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['assets/js/main']);
