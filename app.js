var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

//middleware
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');


//route
app.get('/', function (req, res){
  res.render('index');
});


//WS STUFF
var server = require('http').createServer(app);
var io = require('socket.io')(server);


io.on('connection', function (socket){
  console.log('connected');
  socket.on('message', function(message){
    console.log(message)
    io.emit('message', message)

  });
});




server.listen(port, function(){
  console.log('SOMETHING something darkside on %s', port);
});

