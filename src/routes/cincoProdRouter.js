import { Router } from "express";
import { productosMasVendidos } from "../components/cincoProduController.js";
import { validarToken } from "../components/validarLoginController.js";


const cincoProductos = Router()

cincoProductos.get('/cinco',validarToken, productosMasVendidos)

export default cincoProductos