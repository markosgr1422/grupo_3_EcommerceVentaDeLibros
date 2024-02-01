'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("carrito_de_compras", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios', // Nombre de la tabla a la que hace referencia
          key: 'id',          // Nombre de la columna a la que hace referencia
        },
      },
      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("carrito_de_compras");
  }
};