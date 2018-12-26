var bodyparser=require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://oggy:oggybase1@ds143614.mlab.com:43614/oggy')
// var data = [{item:'eat'},{item:'sleep'},{item:'go'}];

var urlencodedParser = bodyparser.urlencoded({extended:false});

var todoSchema = new mongoose.Schema({
    item:String
});
var Todo = mongoose.model('Todo', todoSchema); 

module.exports = function(app){
    app.get('/todo',function(req,res){
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos: data});
        });       
    });
    app.post('/todo',urlencodedParser, function(req,res){
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });
    app.delete('/todo/:item',function(req,res){
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });  
    });
};
































//finally over nice run with u 
