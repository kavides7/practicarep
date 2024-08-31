let express = require('express');
let router = express.Router();
 
//TABLA Departamento
const departamentos = require('../controllers/departamento.controller.js');
//TABLA Empleado
const empleados = require('../controllers/empleado.controller.js');


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



module.exports = router;