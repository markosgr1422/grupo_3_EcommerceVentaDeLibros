'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("libros", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'genero', // Nombre de la tabla a la que hace referencia
          key: 'id',          // Nombre de la columna a la que hace referencia
        },
      },
      id_autor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'autor', // Nombre de la tabla a la que hace referencia
          key: 'id',          // Nombre de la columna a la que hace referencia
        },
      },
      titulo: {
        type: DataTypes.STRING
      },
      descripcion: {
        type: DataTypes.STRING
      },
      precio: {
        type: DataTypes.INTEGER
      },
      stock: {
        type: DataTypes.INTEGER
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("libros");
  }
};