define(
[
    'jquery',
    'foundation'
],
function($, Foundation) {

    var page = {
        init: function() {
            if(window.Foundation) {
                $(document).foundation();
            }

            $('.message-button').append('<i class="fi-arrow-right"></i>');
            $('.email-button').append('<i class="fi-mail"></i>');

            page.initEventListeners();
        },

        initEventListeners: function() {

        }


    };

    page.init();
});
