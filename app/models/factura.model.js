const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db.config.js');
const Cliente = require('./cliente.model.js');  // Asegúrate de tener el modelo Cliente
const Empleado = require('./empleado.model.js');  // Asegúrate de tener el modelo Empleado

const Factura = db.define('Factura', {
    id_factura: {
        type: DataTypes.NUMERIC,
        primaryKey: true,
        autoIncrement: true
    },
    no_fact: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    serie: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    id_cliente: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'id_cliente'
        }
    },
    id_empleado: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        references: {
            model: Empleado,
            key: 'id_emp'
        }
    },
    fecha_fac: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'FACTURA',
    timestamps: false
});

module.exports = Factura;
