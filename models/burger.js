var orm = require("../config/orm.js");

var burger = {
  selectall: function(cb) {
    orm.selectall("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", "burger_name", vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVal, updateValue, id, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;