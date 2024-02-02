const db = require('.')
const Genero = require('./Genero')



module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titulo: {
          type: DataTypes.STRING
        },
        descripcion: {
          type: DataTypes.STRING
        },
        portada: {
          type: DataTypes.STRING
        },
        precio: {
          type: DataTypes.INTEGER
        },
        stock: {
          type: DataTypes.INTEGER
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
    }

    const options = {
        tableName: 'libros',
        timestamps: false
    }

    const Libro = sequelize.define('Libro', cols, options)

    Libro.associate = (models) => {
      Libro.belongsTo(models.Genero, {
        as: 'genero',
        foreignKey: 'id_genero'
      })
      Libro.belongsTo(models.Autor, {
        as: 'autor',
        foreignKey: 'id_autor'
      })
    }


    return Libro;
}
