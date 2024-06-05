import { Router } from "express";
import { login, registrarUsuario } from "../components/validarLoginController.js";


const validar = Router()

validar.post('/login3', login)
validar.post('/registro', registrarUsuario)

export default validar