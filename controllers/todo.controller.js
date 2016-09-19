'use strict';

const todoModel = require('./../models/todo');

function getAll(cb) {
    todoModel.find({}, (err, results) => {
      if (err) {
          return cb(err);
      }

      return cb(null, results);
    });
}

function add(todoText, cb) {
    todoModel.create({ text: todoText, done: false }, (err) => {
        if (err) {
            return cb(err);
        }

        return cb();
    });
}

function remove(id, cb) {
    todoModel.remove({ _id: id }, (err, result) => {
        if (err) {
            return cb(err);
        }

        return cb();
    });
}

module.exports = {
    getAll: getAll,
    add: add,
    remove: remove
};
