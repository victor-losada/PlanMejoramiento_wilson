import { conexion } from "../database/conexion.js";


export const listarClientes = async (req,res) => {
    try{
        let sql = 'select * from clientes'
         const [respuesta] = await conexion.query(sql)

         if(respuesta.length>0){
            res.status(200).json(respuesta)
         }
         else {
            res.status(400).json({message: 'no se encontraron usuarios'})
         }
    }
    catch(error){
        res.status(500).json({message: 'error en el servidor' + error.message})
    }
}


export const registrarClientes = async (req,res) => {
    try{

        let {dNombre, dDireccion, dTelefono, dCorreo} = req.body

        let sql = `INSERT INTO clientes (dNombre, dDireccion, dTelefono, dCorreo) VALUES ('${dNombre}','${dDireccion}','${dTelefono}','${dCorreo}')`

        const [respuesta] = await conexion.query(sql)

        if(respuesta.affectedRows>0){
            res.status(200).json({message: 'cliente registrado correctamente'})
        }
        else {
            res.status(400).json({message: 'No se pudo registrar el cliente'})
        }
    }
    catch(error) {
        res.status(500).json({message: 'error en el servidor' + error.message})
    }
}

export const actualizarClientes = async (req,res) => {
    try {

        let {dNombre, dDireccion, dTelefono, dCorreo} = req.body
        let dDocumento = req.params.dDocumento

        let sql = `update clientes set dNombre='${dNombre}', dDireccion='${dDireccion}', dTelefono='${dTelefono}',dCorreo='${dCorreo}' where dDocumento= ${dDocumento} `

        const [respuesta] = await conexion.query(sql)

        if(respuesta.affectedRows>0){
            res.status(200).json({message: 'Se actualizo el cliente con exito'})
        }
        else {
            res.status(400).json({message: 'Datps no actualizado'})
        }
        
    }catch(error){
        res.status(500).json({message: 'error en el servidor' + error.message})
    }
}

export const eliminarCliente = async (req,res) => {
    try{
        let dDocumento = req.params.dDocumento

        let sql = `delete from clientes where dDocumento = ${dDocumento}`
        const [respuesta] = await conexion.query(sql)

        if(respuesta.affectedRows>0){
            res.status(200).json({message: 'Se elimino el cliente con exito'})
        }
        else {
            res.status(400).json({message: 'cliente no eliminado'})
        }

    }
    catch(error) {
        res.status(500).json({message: 'error en el servidor' + error.message})
    }
}