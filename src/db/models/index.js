const { Person, PersonSchema } = require('./persons.model');
const { Product, ProductSchema, Category, CategorySchema } = require('./product.models');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
}

module.exports = setupModels;
