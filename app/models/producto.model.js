const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db.config.js');
const Proveedor = require('./proveedor.model.js');  // Asegúrate de tener el modelo Proveedor

const Producto = db.define('Producto', {
    id_producto: {
        type: DataTypes.NUMERIC,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    stock: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    stock_minimo: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_proveedor: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        references: {
            model: Proveedor,  // Hace referencia al modelo Proveedor
            key: 'id_proveedor'
        }
    }
}, {
    tableName: 'PRODUCTO',
    timestamps: false
});

module.exports = Producto;
