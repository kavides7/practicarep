let express = require('express');
let router = express.Router();
 
//TABLA Departamento
const departamentos = require('../controllers/departamento.controller.js');
//TABLA Empleado
const empleados = require('../controllers/empleado.controller.js');
// TABLA Cliente
const clientes = require('../controllers/cliente.controller.js');
// TABLA Proveedor
const proveedores = require('../controllers/proveedor.controller.js');
// TABLA Producto
const productos = require('../controllers/producto.controller.js');
// TABLA Factura
const facturas = require('../controllers/factura.controller.js');
// TABLA FacturaDetalle
const facturaDetalles = require('../controllers/factura_detalle.controller.js');



//Tabla Departamento
router.post('/api/departamentos/create', departamentos.create);
router.get('/api/departamentos/onebyid/:id_departamento', departamentos.getLibroById_departamento);
router.put('/api/departamentos/update/:id_departamento', departamentos.updateById_departamento);
router.delete('/api/departamentos/delete/:id', departamentos.deleteById_departamento);

//Tabla Empleados
router.post('/api/empleados/create', empleados.create);
router.get('/api/empleados/all', empleados.retrieveAllEmpleados);
router.get('/api/empleados/onebyid/:id', empleados.getEmpleadoById);
router.put('/api/empleados/update/:id', empleados.updateById);
router.delete('/api/empleados/delete/:id', empleados.deleteById);

// Tabla Cliente
router.post('/api/clientes/create', clientes.create);
router.get('/api/clientes/all', clientes.retrieveAllClientes);
router.get('/api/clientes/onebyid/:id', clientes.getClienteById);
router.put('/api/clientes/update/:id', clientes.updateById);
router.delete('/api/clientes/delete/:id', clientes.deleteById);

// Tabla Proveedor
router.post('/api/proveedores/create', proveedores.create);
router.get('/api/proveedores/all', proveedores.retrieveAllProveedores);
router.get('/api/proveedores/onebyid/:id', proveedores.getProveedorById);
router.put('/api/proveedores/update/:id', proveedores.updateById);
router.delete('/api/proveedores/delete/:id', proveedores.deleteById);

// Tabla Producto
router.post('/api/productos/create', productos.create);
router.get('/api/productos/all', productos.retrieveAllProductos);
router.get('/api/productos/onebyid/:id', productos.getProductoById);
router.put('/api/productos/update/:id', productos.updateById);
router.delete('/api/productos/delete/:id', productos.deleteById);

// Tabla Factura
router.post('/api/facturas/create', facturas.create);
router.get('/api/facturas/all', facturas.retrieveAllFacturas);
router.get('/api/facturas/onebyid/:id', facturas.getFacturaById);
router.put('/api/facturas/update/:id', facturas.updateById);
router.delete('/api/facturas/delete/:id', facturas.deleteById);

// Tabla FacturaDetalle
router.post('/api/factura_detalles/create', facturaDetalles.create);
router.get('/api/factura_detalles/all', facturaDetalles.retrieveAllFacturaDetalles);
router.get('/api/factura_detalles/onebyid/:id_factura/:id_linea', facturaDetalles.getFacturaDetalleById);
router.put('/api/factura_detalles/update/:id_factura/:id_linea', facturaDetalles.updateById);
router.delete('/api/factura_detalles/delete/:id_factura/:id_linea', facturaDetalles.deleteById);

module.exports = router;