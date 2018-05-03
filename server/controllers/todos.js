// This code snippet creates a new todo
// if successful, it returns it. 
// If it encounters an error, it returns that error instead. 

const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
    
    create(req, res) {
        return Todo
        .create({
            title: req.body.title,
        })
        .then(todos => res.status(201).send(todos))
        .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Todo
          .findAll({
            include: [{
              model: TodoItem,
              as: 'todoItems',
            }],
          })
          .then(todos => res.status(200).send(todos))
          .catch(error => res.status(400).send(error));
      },

      retrieve(req, res) {
        return Todo
          .findById(req.params.todoId, {
            include: [{
              model: TodoItem,
              as: 'todoItems',
            }],
          })
          .then(todo => {
            if (!todo) {
              return res.status(404).send({
                message: 'Todo Not Found',
              });
            }
            return res.status(200).send(todo);
          })
          .catch(error => res.status(400).send(error));
      },
};