define(
[
    'jquery'
],
function($) {

    var page = {
        init: function() {
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
