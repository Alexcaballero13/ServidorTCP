const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const Vibraciones = sq.define(
  "vibracion",
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_dispositivo: DataTypes.STRING,
    vibracion: DataTypes.FLOAT,
    fecha: DataTypes.DATE,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "vibracion",
  }
);

const Includes = [];

module.exports = { Vibraciones, Includes };
