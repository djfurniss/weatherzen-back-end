const knex = require("../db/connection");

function list () {
    return knex("observations").select("*")
}

function create(newObservation) {
  return knex("observations").insert(newObservation).returning("*");
}

module.exports = {
  create,
  list
};