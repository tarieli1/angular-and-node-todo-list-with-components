'use strict';

const todo = require('./todo.route');

function setup(app) {
  app.use('/api/todo', todo);
}

module.exports = setup;
