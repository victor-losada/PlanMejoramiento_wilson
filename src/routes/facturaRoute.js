import { Router } from "express";
import { actualizarFactura, registrarFactura } from "../components/facturaController.js";
import { validarToken } from "../components/validarLoginController.js";

const facturaRouter = Router()

facturaRouter.post('/registrarfac',validarToken, registrarFactura)
facturaRouter.put('/actualizar1/:facNumero',validarToken, actualizarFactura)

export default facturaRouter