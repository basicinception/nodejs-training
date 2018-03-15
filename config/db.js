var connections = require("../knexfile");

var knex = require("knex")(connections.development);

module.exports = knex;
