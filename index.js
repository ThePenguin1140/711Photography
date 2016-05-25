var express = require('express');
var app = express();
var fs = require('fs');

app.get('/images', function(req, res, next) {
    fs.readdir('public/images', function(err, items) {
        res.send(JSON.stringify(items));
        next;
    });
});

app.use(express.static('public'));

app.use('/', express.static('app'));

app.listen(process.env.PORT, function() {
    console.log('Server running on ' + process.env.PORT)
});
