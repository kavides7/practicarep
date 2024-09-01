const { Sequelize, DataTypes } = require('sequelize');
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
        allowNull: true
    },
    nit: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
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
