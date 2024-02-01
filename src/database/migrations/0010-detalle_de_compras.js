'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("detalle_de_compras", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_historial_compras: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'historial_de_compras', // Nombre de la tabla a la que hace referencia
          key: 'id',          // Nombre de la columna a la que hace referencia
        },
      },
      id_libros: {
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
      precio_unitario: {
        type: DataTypes.DECIMAL
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("detalle_de_compras");
  }
};