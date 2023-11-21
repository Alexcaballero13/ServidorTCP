const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const RegistroViento = sq.define(
  "registro_viento",
  {
    codigo_registro: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_ambiental: DataTypes.NUMBER,
    barometricpressure: DataTypes.FLOAT,
    airtemperature: DataTypes.FLOAT,
    relativehumedity: DataTypes.FLOAT,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "registro_viento",
  }
);

const Includes = [];

module.exports = { RegistroViento, Includes };
