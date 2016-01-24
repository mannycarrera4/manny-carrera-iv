define(
[
    'jquery',
    'foundation'
],
function($, Foundation) {

    var page = {
        init: function() {
            console.debug(Foundation);
            console.debug($);

            if(window.Foundation) {
                $(document).foundation();
            }

            $('.message-button').append('<i class="fi-arrow-right"></i>');
            $('.email-button').append('<i class="fi-mail"></i>');

            page.initEventListeners();
        },

        initEventListeners: function() {
            $('#trigger-overlay').on('click', function() {
                console.log('click works');
                $('.overlay').addClass('open');
            });

            $('.overlay-close'). on('click', function() {
                $('.overlay').removeClass('open').addClass('close');
            });
        }


    };

    page.init();
});
