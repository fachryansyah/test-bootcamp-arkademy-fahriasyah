const { Model } = require("objection")
const knex = require("../../database/connection")
const WorkModel = require('./WorkModel');
const CategoryModel = require('./CategoryModel');



Model.knex(knex)

class NameModel extends Model {
    static get tableName() {
        return "Name"
    }
    static get relationMappings() {
        return {
            work: {
                relation: Model.HasOneRelation,
                modelClass: WorkModel,
                join: {
                    from: 'Name.id_work',
                    to: 'Work.id'
                }
            },
            salary: {
                relation: Model.HasOneRelation,
                modelClass: CategoryModel,
                join: {
                    from: 'Name.id_salary',
                    to: 'Category.id'
                }
            }
        };
    }
}

module.exports = NameModel
