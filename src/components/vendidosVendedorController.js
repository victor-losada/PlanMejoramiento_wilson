import { conexion } from "../database/conexion.js";


export const productosVendidos = async (req,res) =>{
    try{

        let sql =
        `
        select 
    u.username AS Vendedor,
    p.proDescripcion AS Producto,
    fd.facCantidad AS Cantidad
from
    facturas f
    JOIN facturadetalle fd ON f.facNumero = fd.facNumero
    JOIN productos p ON fd.facProducto = p.proCodigo
    JOIN usuarios u ON f.facVendedor = u.id
order by
    u.username, p.proDescripcion;
        
        `
        const [respuesta] = await conexion.query(sql)

        if(respuesta.length>0){
            res.status(200).json(respuesta)
        }
        else {
            res.status(400).json({message: 'error al listar productos vendidos por el vendedor'})
        }
    }
    catch(error){
        res.status(500).json({message: 'error en el servidor' + error. message})
    }
}