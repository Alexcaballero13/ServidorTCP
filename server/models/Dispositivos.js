const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");
const { ControlAcceso } = require("./ControlAcceso");
const { Rms } = require("./Rms");
const { Temperaturas } = require("./Temperaturas");
const { Vibraciones } = require("./Vibraciones");

const Dispositivos = sq.define(
  "dispositivos",
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    nombre: DataTypes.STRING,
    latitud: DataTypes.FLOAT,
    longitud: DataTypes.FLOAT,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "dispositivos",
  }
);

Dispositivos.hasMany(ControlAcceso, {
  sourceKey: "codigo",
  foreignKey: "codigo_dispositivo",
});

Dispositivos.hasMany(Rms, {
  sourceKey: "codigo",
  foreignKey: "codigo_dispositivo",
});
Dispositivos.hasMany(Temperaturas, {
  sourceKey: "codigo",
  foreignKey: "codigo_dispositivo",
});
Dispositivos.hasMany(Vibraciones, {
  sourceKey: "codigo",
  foreignKey: "codigo_dispositivo",
});

const Includes = [];

module.exports = { Dispositivos, Includes };
