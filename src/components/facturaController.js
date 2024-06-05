import { conexion } from "../database/conexion.js";

export const registrarFactura = async (req,res) => {
    try {

        let {facFecha, facCliente, facValorTotal, facVendedor} = req.body

        let sql = `insert into facturas (facFecha,facCliente,facValorTotal,facVendedor)
        values ('${facFecha}','${facCliente}','${facValorTotal}','${facVendedor}')`

        const [respuesta] = await conexion.query(sql)

        if(respuesta.affectedRows>0){
            res.status(200).json({messaje: 'Registro factura exitoso'})
        }
        else {
            res.status(400).json({messaje: 'Error en el registro de factura'})
        }
    }
    catch(error) {
        res.status(500).json({messaje: 'error en el servidor' + error.messaje})
    }
}
export const actualizarFactura = async (req,res) => {
    try{
        let facNumero = req.params.facNumero
        let {facFecha, facCliente, facValorTotal, facVendedor} = req.body

        let sql = `update facturas set facFecha='${facFecha}',facCliente='${facCliente}',facValorTotal='${facValorTotal}',facVendedor= '${facVendedor}' where facNumero=${facNumero} `

        const [respuesta] = await conexion.query(sql)

        if(respuesta.affectedRows>0){
            res.status(200).json({messaje: 'se actualizo la factura con exito'})
        }
        else{
            res.status(400).json({messaje: 'no se actualizo la factura'})
        }

    }catch(error){
        res.status(500).json({messaje: 'error en el servidor' + error.messaje})
    }
}