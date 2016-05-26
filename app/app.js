'use strict';

$(function () {
    var gridster = $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [50, 50],
        resize: {
            enabled: true,
            resize: function (e, ui, $widget) {
                if ($widget.width() > $widget.height()) {
                    $widget.children('img').addClass('landscape').removeClass('portrait');
                } else {
                    $widget.children('img').addClass('portrait').removeClass('landscape');
                }
            },
            stop: function (e, ui, $widget) {
                $widget.children('div').bullseye({
                    'fadeEffect': false
                });
            }
        },
        avoid_overlapped_widgets: true
    }).data('gridster');

    var goHome = function () {

    };

    var goContact = function () {

    };

    // $('#saveButton').click(function () {
    //     $.post(
    //         '/state',
    //         {state: gridster.serialize()},
    //         function (data) {
    //             console.log(data);
    //         }
    //     );
    // });

    // $('#loadButton').click(function () {
    //     $.get('/state', function (res) {
    //         _(res).forEach(function (item) {
    //             gridster.add_widget(
    //                 '<li class="new">' +
    //                 '<div class="portrait landscape">' +
    //                 '<img class="portrait" src="/images/' + item.url + '"/>' +
    //                 '</div>' +
    //                 '</li>',
    //                 item.size_x,
    //                 item.size_y,
    //                 item.col,
    //                 item.row
    //             );
    //         });
    //     });
    // })

    $.get('/state', function (res) {
        _(res).forEach(function (item) {
            gridster.add_widget(
                '<li class="new">' +
                '<div class="portrait landscape">' +
                '<img class="portrait" src="/images/' + item.url + '"/>' +
                '</div>' +
                '</li>',
                item.size_x,
                item.size_y,
                item.col,
                item.row
            );
        });
    });

});
