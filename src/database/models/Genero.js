const {Libro} = require("../models")


module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          nombre: {
            type: DataTypes.STRING
          }
    }

    const options = {
        tableName: 'genero',
        timestamps: false
    }

    const Genero = sequelize.define('Genero', cols, options)

    Genero.associate = (models) => {
        //Genero.hasMany(models.Libro)
    }

    return Genero;
}
