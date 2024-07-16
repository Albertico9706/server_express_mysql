const { Model, DataTypes, Sequelize } = require('sequelize');

//Hacer el MER para poder diseñar lo que falta de la base de datos
const PRODUCT_TABLE= 'products'
const CATEGORY_TABLE= 'categories'

class Product extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Product',
            timestamps: true
        }
    }
} 

const ProductSchema={
    id:{
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull:false,
        type: DataTypes.STRING,
        field: 'name'
    }, 
    category_id: {
        allowNull:false,
        type: DataTypes.INTEGER,
        field: 'category_id'
    }
}


class Category extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: true
        }
    }
}

const CategorySchema={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    }
}

module.exports = { Product, ProductSchema, Category, CategorySchema };