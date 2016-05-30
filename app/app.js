'use strict';

$(function () {

    $('.grid-stack').gridstack({
        cellHeight: 40
    });

    // var gridster = $(".gridster ul").gridster({
    //     widget_selector: "image-container",
    //     widget_margins: [10, 10],
    //     widget_base_dimensions: [50, 50],
    //     resize: {
    //         enabled: true,
    //         resize: function (e, ui, $widget) {
    //             if ($widget.width() > $widget.height()) {
    //                 $widget.children('img').addClass('landscape').removeClass('portrait');
    //             } else {
    //                 $widget.children('img').addClass('portrait').removeClass('landscape');
    //             }
    //         },
    //         stop: function (e, ui, $widget) {
    //             $widget.children('div').bullseye({
    //                 'fadeEffect': false
    //             });
    //         }
    //     },
    //     avoid_overlapped_widgets: true
    // }).data('gridster');

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
    //
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
        var grid = $('.grid-stack').data('gridstack');
        grid.batchUpdate();
        _(res).forEach(function (item) {
            var el = $('<image-container class="new grid-stack-item" url="' + item.url + '"></image-container>');
            grid.addWidget(
                el,
                item.col,
                item.row,
                item.size_x,
                item.size_y,
                true
            );
            el.children('div').bullseye({
                'fadeEffect': false
            })
        });
        grid.commit();
    });

});
