const { Model } = require("objection")
const knex = require("../../database/connection")

Model.knex(knex)

class WorkModel extends Model {
    static get tableName() {
        return "Work"
    }
}

module.exports = WorkModel
