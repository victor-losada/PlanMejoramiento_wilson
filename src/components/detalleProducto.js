import { conexion } from "../database/conexion.js";

export const obtenerdetalleProductos = async (req,res) => {
    try{
        let sql = `  
        select 
        p.proCodigo,
        p.proDescripcion,
        p.proValor,
        p.proCantidad AS stock,
        /* cantidad disponible del producto */
        IFNULL(SUM(fd.facCantidad), 0) AS unitsSold
        /* unidades vendidas del producto */
    from 
        productos p
    left join 
        facturadetalle fd ON p.proCodigo = fd.facProducto
        /* incluir todos los productos */
    group by 
        p.proCodigo, 
        p.proDescripcion, 
        p.proValor, 
        p.proCantidad;
        /* agrupar los resultados */
        `

        const [respuesta] = await conexion.query(sql)
        if(respuesta.length>0){
            res.status(200).json(respuesta)
        }
        else{
            res.status(400).json({message: 'no se puede obtener los detalles'})
        }
    }
    catch(error){
        res.status(500).json({message: 'error en el servidor' + error.message})
    }
}