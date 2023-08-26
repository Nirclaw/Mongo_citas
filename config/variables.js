import dotenv from "dotenv";
import routesVersioning from "express-routes-versioning";

dotenv.config()

export const Ausuario = process.env.ALTAS_USUARIO;
export const Apass = process.env.ATLAS_PASS;
export const Adb = process.env.ATLAS_DB;
export const MyServer = JSON.parse(process.env.SERVER)
export const version = routesVersioning()
export const PASSWORD = process.env.PASSWORD