const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const RegistroGases = sq.define(
  "registro_gases",
  {
    codigo_registro: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    fecha: DataTypes.DATE,
    ozone: DataTypes.FLOAT,
    nitrogendioxide: DataTypes.FLOAT,
    carbonmonoxide: DataTypes.FLOAT,
    sulfurdioxide: DataTypes.FLOAT,
    nitrogenoxides: DataTypes.FLOAT,
    hydrogensulfide: DataTypes.FLOAT,
    carbondioxide: DataTypes.FLOAT,
    codigo_ambiental: DataTypes.NUMBER,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "registro_gases",
  }
);

const Includes = [];

module.exports = { RegistroGases, Includes };
