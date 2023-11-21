const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const Temperaturas = sq.define(
  "temperatura",
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_dispositivo: DataTypes.STRING,
    temperatura: DataTypes.FLOAT,
    humedad: DataTypes.FLOAT,
    fecha: DataTypes.DATE,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "temperatura",
  }
);

const Includes = [];

module.exports = { Temperaturas, Includes };
