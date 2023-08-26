import { Router } from "express";
import { limit } from "../middleware/limit.js";
import Passport from "../cript/pasporthelp.js";
import { version } from "../config/variables.js";
import { medicos, medicov1 } from "../versiones/v1/medico.js";

const appMedico = Router()
appMedico.use(limit(),Passport.authenticate("bearer",{session:false}))


appMedico.get("/",version({
    "1.0.0":medicov1
}))
appMedico.get("/medicos",version({
    "1.0.0":medicos
}))

export default appMedico