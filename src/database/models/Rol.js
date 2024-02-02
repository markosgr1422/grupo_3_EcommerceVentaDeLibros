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
        tableName: 'roles',
        timestamps: false
    }

    const Rol = sequelize.define('Rol', cols, options)

   


    return Rol;
}
