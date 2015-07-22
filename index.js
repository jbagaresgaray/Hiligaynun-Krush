'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));
app.set('port', process.env.APP_PORT || 9000);
app.listen(process.env.PORT || 9000, function(err) {
    if (err instanceof Error) {
        console.error('Unable to start Server', app.get('port'));
    } else {
        console.info('Server started at ' + app.get('port'));
    }
});
