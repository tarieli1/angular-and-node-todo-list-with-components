var todo = require('./models/todo');

module.exports = function(app){
    
    app.get('/api/todo', function(req, res){
        todo.find({}, function(err, results){
            if(err){
                res.send(err);
            }
            res.json(results);
        });
    });
    
    app.post('/api/todo', function(req, res){
        todo.create({
            text: req.body.text,
            done: false
        }, function(err, results){
            if(err){
                res.send(err);
            }
            todo.find({}, function(err, results){
                if(err){
                    res.send(err);
                }
                res.json(results);
            });
        });
    });

    app.delete('/api/todo/:todo_id', function(req, res){
        todo.remove({
            _id: req.params.todo_id
        }, function(err, results){
            if(err){
                res.send(err);
            }
             todo.find({}, function(err, results){
                if(err){
                    res.send(err);
                }
                res.json(results);
            });
        })
    });

    app.get('*', function(req, res){
        res.sendfile('./public/index.html')
    });
}
