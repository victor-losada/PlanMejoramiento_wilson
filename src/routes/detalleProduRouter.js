import { Router } from "express";
import { obtenerdetalleProductos } from "../components/detalleProducto.js";
import { validarToken } from "../components/validarLoginController.js";


const detalProducto = Router()

detalProducto.get('/obtener', validarToken, obtenerdetalleProductos)

export default detalProducto