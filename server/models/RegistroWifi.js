const { DataTypes } = require("sequelize");
const { sq } = require("../utils/db");
const { Camaras } = require("./Camaras");
const { Wifi } = require("./wifi");

const RegistroWifi= sq.define(
  "registro_wifi",
  {
    codigo_registro: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: DataTypes.DATE,
    mac: DataTypes.TEXT,
    codigo_wifi: DataTypes.STRING,
  },
  {
    schema: "public",
    timestamps: false,
    tableName: "registro_wifi",
  }
);

RegistroWifi.belongsTo(Wifi, { foreignKey: 'codigo_wifi', targetKey: 'codigo_wifi_bluetooth' });
const Includes = [];

module.exports = { RegistroWifi, Includes };
