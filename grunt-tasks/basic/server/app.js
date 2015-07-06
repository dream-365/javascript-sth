var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('client'));

var server = require('http').createServer(app);

// Start server
server.listen(8080, function () {
    var host = server.address().address;
  var port = server.address().port;

  console.log('[start server] http://%s:%s', host, port);
});

// Expose app
exports = module.exports = app;