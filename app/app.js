'use strict';

$(function () {

    $('.grid-stack').gridstack({
        cellHeight: 40
    });

    var goHome = function () {

    };

    var goContact = function () {

    };

    $('#saveButton').click(function () {

    });

    $('#loadButton').click(function () {

    });

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
