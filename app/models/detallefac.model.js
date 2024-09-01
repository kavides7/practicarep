const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db.config.js');
const Factura = require('./factura.model.js');  // Asegúrate de tener el modelo Factura
const Producto = require('./producto.model.js');  // Asegúrate de tener el modelo Producto

const FacturaDetalle = db.define('FacturaDetalle', {
    id_factura: {
        type: DataTypes.NUMERIC,
        primaryKey: true,
        references: {
            model: Factura,
            key: 'id_factura'
        }
    },
    id_linea: {
        type: DataTypes.NUMERIC,
        primaryKey: true,
        autoIncrement: true
    },
    id_producto: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        references: {
            model: Producto,
            key: 'id_producto'
        }
    },
    cantidad: {
        type: DataTypes.NUMERIC,
        allowNull: false
    }
}, {
    tableName: 'FACTURA_DETALLE',
    timestamps: false
});

module.exports = FacturaDetalle;
