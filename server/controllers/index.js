// we're going to be exporting our controllers from this file

const todos = require('./todos');
const todoItems = require('./todoitems');

module.exports = {
  todos,
  todoItems,
};