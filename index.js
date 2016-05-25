var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/', express.static('app'))

app.listen(process.env.PORT, function() {
    console.log('Server running on ' + process.env.PORT)
});
