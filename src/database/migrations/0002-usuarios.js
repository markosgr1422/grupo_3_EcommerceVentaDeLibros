'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING
      },
      apellido: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'roles', // Nombre de la tabla a la que hace referencia
          key: 'id',          // Nombre de la columna a la que hace referencia
        },
        
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuarios");
  }
};
