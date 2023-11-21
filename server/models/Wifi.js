const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");

const Wifi = sq.define(
  "wifi-bluetooth",
  {
    codigo_wifi_bluetooth: {
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
    tableName: "wifi-bluetooth",
  }
);

const Includes = [];

module.exports = { Wifi, Includes };
