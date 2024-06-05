import { Router } from "express";
import { productosVendidos } from "../components/vendidosVendedorController.js";
import { validarToken } from "../components/validarLoginController.js";


const vandidosVende = Router()

vandidosVende.get('/listadovende',validarToken, productosVendidos)

export default vandidosVende