'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuario_roles", {
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios', // Nombre de la tabla a la que hace referencia
          key: 'id',          // Nombre de la columna a la que hace referencia
        },
        
        
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
    await queryInterface.dropTable("usuario_roles");
  }
};
