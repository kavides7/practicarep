const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db.config.js');

const Proveedor = db.define('Proveedor', {
    id_proveedor: {
        type: DataTypes.NUMERIC,
        primaryKey: true,
        autoIncrement: true
    },
    empresa: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    telefono: {
        type: DataTypes.NUMERIC,
        allowNull: true
    },
    nit: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    ciudad: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    pais: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    contacto: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    telefono_contacto: {
        type: DataTypes.NUMERIC,
        allowNull: true
    },
    estatus: {
        type: DataTypes.NUMERIC,
        allowNull: false
    }
}, {
    tableName: 'PROVEEDOR',
    timestamps: false
});

module.exports = Proveedor;
