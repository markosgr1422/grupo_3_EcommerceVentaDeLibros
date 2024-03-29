const db = require('.')

module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          nombre: {
            type: DataTypes.STRING
          },
    }

    const options = {
        tableName: 'autor',
        timestamps: false
    }

    const Autor = sequelize.define('Autor', cols, options)

    Autor.associate = (models) => {
      Autor.hasMany(models.Libro, {
          foreignKey:{
              name:'id_genero'
          },
          as: 'libros'
      })
  }


    return Autor;
}
