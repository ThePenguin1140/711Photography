var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var _ = require('lodash');

var lastState;

app.use(express.static('public'));

app.use('/', express.static('app'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/state', function (req, res, next) {
    console.log(lastState);
    fs.readdir('public/images', function (err, items) {
        if (_.isUndefined(lastState)) {
            console.log('populating state');
            lastState = _.fill(
                Array(items.length),
                {
                    row: 0,
                    col: 0,
                    size_x: 2,
                    size_y: 2
                }
            )
        }

        console.log(_.merge(
            _.map(items, function (item) {
                return {'url': item}
            }),
            lastState
        ));
        res.send(
            _.merge(
                _.map(items, function (item) {
                    return {'url': item}
                }),
                lastState
            )
        );

        next;
    });
});

app.post('/state', function (req, res, next) {
    lastState = req.body.state;
    console.log(lastState);
    res.send('success');
    next;
});

app.listen(process.env.PORT, function () {
    console.log('Server running on ' + process.env.PORT)
});