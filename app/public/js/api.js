$(document).ready(function() {

    $('.nav .nav').hide();

    $('.nav>li').find('a.trigger').click(function() {
        var $target = $(this).next();
        if($target.size() !== 0) {
            if($target.is(':visible')) {
                $target.hide();
            } else {
                $target.show();
            }

        }
    });
});
