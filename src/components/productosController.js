import { conexion } from "../database/conexion.js";

export const productosRegistrar = async (req,res) => {
    try{
        
        let {proDescripcion, proValor, proCantidad} = req.body

        let sql = `insert into productos (proDescripcion, proValor, proCantidad) 
        values ('${proDescripcion}','${proValor}','${proCantidad}')`

        const [respuesta] = await conexion.query(sql)

        if(respuesta.affectedRows>0){
            res.status(200).json({message: 'producto registrado con exito'})
        }
        else {
            res.status(400).json({message: 'No se pudo registrar el producto'})
        }
    }
    catch(error){
        res.status(500).json({message: 'error en el servidor' + error.message})
    }
}
export const buscarProducto = async (req,res) => {
    try {
        let proCodigo = req.params.proCodigo

        let sql = `select * from productos where proCodigo= ${proCodigo}`

        const [respuesta] = await conexion.query(sql)

        if(respuesta.length==1){
            res.status(200).json(respuesta)
        }
        else {
            res.status(400).json({message: 'El producto no existe'})
        }
    }
    catch(error) {
        res.status(500).json({message: 'error en el servidor' + error.message})
    }
}
export const eliminarProducto = async (req,res) => {
    try {
        let proCodigo = req.params.proCodigo

        let sql = `delete from productos where proCodigo= ${proCodigo}`

        const [respuesta] = await conexion.query(sql)

        if(respuesta.affectedRows > 0){
            res.status(200).json({message: 'producto eliminado con exito'})
        }else{
            res.status(404).json({message:'Error al eliminar producto'})
        }
    } catch (error) {
        res.status(500).json({message: 'Error en el servidor' + error.message})
    }
}
