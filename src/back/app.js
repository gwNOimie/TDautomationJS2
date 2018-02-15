var express = require('express');
var app = express();
app.set('port', process.env.PORT || 8080);
app.use('/', express.static('public'));
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
