'use strict';

$(function () {
    var gridster = $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [50, 50],
        resize: {
            enabled: true,
            resize: function( e, ui, $widget ) {
                if( $widget.width() > $widget.height() ) {
                    $widget.children('img').addClass('landscape').removeClass('portrait');
                } else {
                    $widget.children('img').addClass('portrait').removeClass('landscape');
                }
            },
            stop: function( e, ui, $widget ) {
                $widget.children('div').bullseye({
                    'fadeEffect': false
                });
            }
        },
        avoid_overlapped_widgets: true
    }).data('gridster');

    $.get('/images', function (res) {
        _(_.split(_.trim(res, '[]'), ',')).forEach(function (img, i) {
            gridster.add_widget('<li class="new"><div class="portrait landscape"><img class="portrait" src="/images/' + _.trim(img, '"') + '"/></div></li>', 2, 2, 0, 0);
        });
    });
});