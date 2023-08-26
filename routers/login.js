import { limit } from "../middleware/limit.js";
import { CrearToken } from "../cript/jwt.js";
import { Router } from "express";
import { userV1 } from "../versiones/v1/userV1.js";
import routesVersioning from "express-routes-versioning";

const appLogin = Router()
const version = routesVersioning()
appLogin.use("/",limit(),CrearToken)

appLogin.post("/",version({
    "1.0.0":userV1
}))


export{
    appLogin
}