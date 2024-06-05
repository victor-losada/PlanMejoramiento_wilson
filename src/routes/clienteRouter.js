import { Router } from "express";
import { actualizarClientes, eliminarCliente, listarClientes, registrarClientes } from "../components/clientesController.js";
import { validarToken } from "../components/validarLoginController.js";



const routerCliente = Router()

routerCliente.post('/registrar',validarToken, registrarClientes)
routerCliente.get('/listar', listarClientes)
routerCliente.put('/actualizar/:dDocumento',validarToken, actualizarClientes)
routerCliente.delete('/eliminar/:dDocumento',validarToken, eliminarCliente)

export default routerCliente