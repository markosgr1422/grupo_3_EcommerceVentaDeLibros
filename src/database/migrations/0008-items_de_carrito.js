'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("items_de_carrito", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_carrito: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'carrito_de_compras', // Nombre de la tabla a la que hace referencia
          key: 'id',          // Nombre de la columna a la que hace referencia
        },
      },
      id_libro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'libros', // Nombre de la tabla a la que hace referencia
          key: 'id',          // Nombre de la columna a la que hace referencia
        },
      },
      cantidad: {
        type: DataTypes.INTEGER
      },
      subtotal: {
        type: DataTypes.INTEGER
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("items_de_carrito");
  }
};