const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");
const { RegistroGases } = require("./RegistroGases");
const { RegistroViento } = require("./RegistroViento");
const { RegistroParticulas } = require("./RegistroParticulas");

const Ambientales = sq.define(
  "ambientales",
  {
    codigo_ambiental: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    latitud: DataTypes.DECIMAL,
    longitud: DataTypes.DECIMAL,
    direccion: DataTypes.TEXT,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "ambientales",
  }
);

Ambientales.hasMany(RegistroGases, {
  sourceKey: "codigo_ambiental",
  foreignKey: "codigo_ambiental",
});
Ambientales.hasMany(RegistroViento, {
  sourceKey: "codigo_ambiental",
  foreignKey: "codigo_ambiental",
});
Ambientales.hasMany(RegistroParticulas, {
  sourceKey: "codigo_ambiental",
  foreignKey: "codigo_ambiental",
});
const Includes = [Ambientales, RegistroViento, RegistroParticulas];

module.exports = { Ambientales, Includes };
