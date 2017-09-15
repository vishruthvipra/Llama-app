var express = require('express');
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var connectionString = 'mongodb://llamauser:llamapass@ds127564.mlab.com:27564/llama-app';
mongoose.connect(connectionString);

require("./serverfiles/quiz.service.server.js")(app);

var port = process.env.PORT || 3000;
app.listen(port);