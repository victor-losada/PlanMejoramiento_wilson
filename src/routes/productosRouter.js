import { Router } from "express";
import { buscarProducto, eliminarProducto, productosRegistrar } from "../components/productosController.js";
import { validarToken } from "../components/validarLoginController.js";


const productoRoute = Router()

productoRoute.post('/registrar',validarToken, productosRegistrar)
productoRoute.get('/buscar/:proCodigo',validarToken, buscarProducto)
productoRoute.delete('/eliminar/:proCodigo',validarToken, eliminarProducto)
export default productoRoute