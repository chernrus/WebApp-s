var express = require('express'),
    app = express(),
    path = require('path'),
    config = {
        port: 3000,
        host: 'localhost',
    };

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/view_one', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'view1.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000, function () {
  console.log('Server starting on ' + config.host + ':' + config.port);
});
