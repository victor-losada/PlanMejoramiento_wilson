import { Router } from "express";
import { listarFacturas } from "../components/informacionFacturas.js";
import { validarToken } from "../components/validarLoginController.js";


const listarFactura = Router()

listarFactura.get('/factura', validarToken, listarFacturas)

export default listarFactura