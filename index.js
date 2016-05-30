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
    if (_.isUndefined(lastState)) {
        console.log("initializing state");
        fs.readdir('public/images', function (err, items) {
            lastState = _.fill(
                Array(items.length),
                {
                    x: 0,
                    y: 0,
                    size_x: 2,
                    size_y: 2,
                    autoPosition: true
                }
            );
            lastState = _.merge(
                _.map(items, function (item) {
                    return {'url': item}
                }),
                lastState
            );
            console.log("sending state:\n" + JSON.stringify(lastState));
            res.send(lastState);
            next;
        });
    } else {
        console.log("sending state:\n" + JSON.stringify(lastState));
        res.send(lastState);
        next;
    }
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