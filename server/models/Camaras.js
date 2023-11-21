const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const Camaras = sq.define(
  "camaras",
  {
    codigo_camara: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    latitud: DataTypes.DECIMAL,
    longitud: DataTypes.DECIMAL,
    direccion: DataTypes.TEXT,
    sentido: DataTypes.TEXT,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "camaras",
  }
);

const Includes = [];

module.exports = { Camaras, Includes };
