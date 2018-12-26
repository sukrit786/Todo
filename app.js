var express = require('express');
var app = express();
var todocontroler = require('./controllers/todocontroler');


app.set('view engine', 'ejs');
app.use(express.static('./public'));

todocontroler(app);
app.listen(8080);
console.log('sucess ap port 8080');