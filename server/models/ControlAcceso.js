const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const ControlAcceso = sq.define(
  "control_acceso",
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_dispositivo: DataTypes.NUMBER,
    estado: DataTypes.BOOLEAN,
    fecha: DataTypes.DATE,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "control_acceso",
  }
);

const Includes = [];

module.exports = { ControlAcceso, Includes };
