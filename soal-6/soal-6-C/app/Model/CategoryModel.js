const { Model } = require("objection")
const knex = require("../../database/connection")

Model.knex(knex)

class CategoryModel extends Model {
    static get tableName() {
        return "Category"
    }
}

module.exports = CategoryModel
