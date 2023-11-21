const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");
const { Camaras } = require("./Camaras");

const RegistroCamaras = sq.define(
  "registro_camaras",
  {
    codigo_registro: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: DataTypes.DATE,
    velocidad: DataTypes.STRING,
    cantidad: DataTypes.STRING,
    codigo_camara: DataTypes.STRING,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "registro_camaras",
  }
);

RegistroCamaras.belongsTo(Camaras, { foreignKey: 'codigo_camara', targetKey: 'codigo_camara' });
const Includes = [];

module.exports = { RegistroCamaras, Includes };
