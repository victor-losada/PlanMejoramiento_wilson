import { conexion } from "../database/conexion.js";

export const productosMasVendidos = async (req,res) => {
    try {
        let sql =
        `
        select
        p.proDescripcion,
        SUM(fd.facCantidad) AS cantidad_vendida
        from
        facturadetalle fd
         join
        productos p ON fd.facProducto = p.proCodigo  
        group by
        p.proDescripcion
         order by
        cantidad_vendida DESC
        limit 5;

        `
                // DESC es para ordenar de mayor a menor

        const [respuesta] = await conexion.query(sql)

        if(respuesta.length>0){
            res.status(200).json(respuesta)
        }
        else{
            res.status(400).json({message: 'error al obtener los productos'})
        }
    }
    catch(error){
        res.status(500).json({message: 'error en el servidor' + error.message})
    }
}
