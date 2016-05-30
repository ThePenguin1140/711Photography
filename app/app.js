'use strict';

$(function () {

    $('.grid-stack').gridstack({
    });

    var goHome = function () {

    };

    var goContact = function () {

    };

    $('#saveButton').click(function () {
        var res = _.map($('.grid-stack .grid-stack-item:visible'), function (el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            return {
                url: el.attr('url'),
                x: node.x,
                y: node.y,
                size_x: node.width,
                size_y: node.height
            };
        });
        $.post('/state', {
            state: res
        }, function( response ) {
            console.log( response );
        })
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
