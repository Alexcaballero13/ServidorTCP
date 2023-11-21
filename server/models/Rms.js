const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const Rms = sq.define(
  "rms",
  {
    codigo: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    equipmentId: DataTypes.STRING,
    controlId: DataTypes.INTEGER,
    voltage: DataTypes.FLOAT,
    current: DataTypes.FLOAT,
    power: DataTypes.FLOAT,
    energyConsumption: DataTypes.FLOAT,
    time: DataTypes.TIME,
    frequency: DataTypes.FLOAT,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "rms",
  }
);

const Includes = [];

module.exports = { Rms, Includes };
