// const db = require(".");

module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles", // Nombre de la tabla a la que hace referencia
        key: "id", // Nombre de la columna a la que hace referencia
      },
    },
  };

  const options = {
    tableName: "usuarios",
    timestamps: false,
  };

  const Usuario = sequelize.define("Usuario", cols, options);

  Usuario.associate = (models) => {
    Usuario.belongsTo(models.Rol, {
      as: "rol",
        foreignKey: "id_rol",
    })
  }

  return Usuario;
};
