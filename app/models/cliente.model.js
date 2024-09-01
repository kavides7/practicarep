const { DataTypes } = require('sequelize');
const db = require('../config/db.config.js');

const Cliente = db.define('Cliente', {
    id_cliente: {
        type: DataTypes.NUMERIC,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    razon_social: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nit: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estatus: {
        type: DataTypes.NUMERIC,
        allowNull: false
    }
}, {
    tableName: 'CLIENTE',
    timestamps: false
});

module.exports = Cliente;
