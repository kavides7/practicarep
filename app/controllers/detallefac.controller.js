const FacturaDetalle = require('../models/factura_detalle.model.js');

exports.create = (req, res) => {
    let facturaDetalle = {};

    try {
        facturaDetalle.id_factura = req.body.id_factura;
        facturaDetalle.id_producto = req.body.id_producto;
        facturaDetalle.cantidad = req.body.cantidad;

        FacturaDetalle.create(facturaDetalle).then(result => {
            res.status(200).json({
                message: "Detalle de factura creado exitosamente con id_factura = " + result.id_factura + " y id_linea = " + result.id_linea,
                facturaDetalle: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear el detalle de factura!",
            error: error.message
        });
    }
};
exports.retrieveAllFacturaDetalles = (req, res) => {
    FacturaDetalle.findAll()
        .then(facturaDetalleInfos => {
            res.status(200).json({
                message: "¡Detalles de factura obtenidos exitosamente!",
                facturaDetalles: facturaDetalleInfos
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener los detalles de factura!",
                error: error
            });
        });
};
exports.getFacturaDetalleById = (req, res) => {
    let facturaId = req.params.id_factura;
    let lineaId = req.params.id_linea;
    
    FacturaDetalle.findOne({
        where: {
            id_factura: facturaId,
            id_linea: lineaId
        }
    })
    .then(facturaDetalle => {
        res.status(200).json({
            message: "Detalle de factura obtenido exitosamente con id_factura = " + facturaId + " y id_linea = " + lineaId,
            facturaDetalle: facturaDetalle
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "¡Error al obtener detalle de factura con id_factura = " + facturaId + " y id_linea = " + lineaId + "!",
            error: error
        });
    });
};
exports.updateById = async (req, res) => {
    try {
        let facturaId = req.params.id_factura;
        let lineaId = req.params.id_linea;
        let facturaDetalle = await FacturaDetalle.findOne({
            where: {
                id_factura: facturaId,
                id_linea: lineaId
            }
        });

        if (!facturaDetalle) {
            res.status(404).json({
                message: "No se encontró el detalle de factura para actualizar con id_factura = " + facturaId + " y id_linea = " + lineaId,
                facturaDetalle: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                id_producto: req.body.id_producto,
                cantidad: req.body.cantidad
            };
            let result = await FacturaDetalle.update(updatedObject, { 
                returning: true, 
                where: {
                    id_factura: facturaId,
                    id_linea: lineaId
                }
            });
            
            if (!result) {
                res.status(500).json({
                    message: "No se puede actualizar un detalle de factura con id_factura = " + facturaId + " y id_linea = " + lineaId,
                    error: "No se pudo actualizar el detalle de factura",
                });
            }

            res.status(200).json({
                message: "Actualización exitosa de un detalle de factura con id_factura = " + facturaId + " y id_linea = " + lineaId,
                facturaDetalle: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar un detalle de factura con id_factura = " + req.params.id_factura + " y id_linea = " + req.params.id_linea,
            error: error.message
        });
    }
};
exports.deleteById = async (req, res) => {
    try {
        let facturaId = req.params.id_factura;
        let lineaId = req.params.id_linea;
        let facturaDetalle = await FacturaDetalle.findOne({
            where: {
                id_factura: facturaId,
                id_linea: lineaId
            }
        });

        if (!facturaDetalle) {
            res.status(404).json({
                message: "No existe el detalle de factura con id_factura = " + facturaId + " y id_linea = " + lineaId,
                error: "404",
            });
        } else {
            await facturaDetalle.destroy();
            res.status(200).json({
                message: "Eliminación exitosa del detalle de factura con id_factura = " + facturaId + " y id_linea = " + lineaId,
                facturaDetalle: facturaDetalle,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar un detalle de factura con id_factura = " + req.params.id_factura + " y id_linea = " + req.params.id_linea,
            error: error.message,
        });
    }
};
