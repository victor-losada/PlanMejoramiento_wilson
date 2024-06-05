import { conexion } from "../database/conexion.js";
export const listarFacturas = async (req, res) => {
    try {
        let sql = `select 
                        f.facNumero as factura_id,
                        f.facFecha as fecha_factura,
                        c.dNombre as cliente_nombre,
                        c.dDireccion as cliente_direccion,
                        c.dTelefono as cliente_telefono,
                        c.dCorreo as cliente_correo,
                        p.proDescripcion as producto_nombre,
                        fd.facCantidad as cantidad_producto,
                        p.proValor as precio_unitario_producto,
                        (fd.facCantidad * p.proValor) as precio_total_producto,
                        f.facValorTotal as factura_valor_total,
                        v.venUsuario as vendedor_id,
                        v.venContraseña as vendedor_nombre
                    from 
                        facturas f
                        join 
                        clientes c on f.facCliente = c.dDocumento
                        join 
                        facturadetalle fd on f.facNumero = fd.facNumero
                        join 
                        productos p on fd.facProducto = p.proCodigo
                        join 
                        vendedores v on f.facVendedor = v.venUsuario`;

        const [respuesta] = await conexion.query(sql);

        if (respuesta.length > 0) {
            res.status(200).json(respuesta);
        } else {
            res.status(400).json({ message: 'No se encontraron usuarios' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor: ' + error.message });
    }
};
