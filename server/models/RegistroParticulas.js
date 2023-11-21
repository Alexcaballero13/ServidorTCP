const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const RegistroParticulas = sq.define(
  "registro_particulas",
  {
    codigo_registro: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_ambiental: DataTypes.NUMBER,
    voclr: DataTypes.FLOAT,
    vochr: DataTypes.FLOAT,
    pm1: DataTypes.FLOAT,
    pm25: DataTypes.FLOAT,
    pm10: DataTypes.FLOAT,
    tsp: DataTypes.FLOAT,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "registro_particulas",
  }
);

const Includes = [];

module.exports = { RegistroParticulas, Includes };
