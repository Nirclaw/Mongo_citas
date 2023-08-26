import { Router } from "express";
import { limit } from "../middleware/limit.js";
import Passport from "../cript/pasporthelp.js";
import { citasGenero, consultorioPaciente, userv2 } from "../versiones/v1/userv2.js";
import { version } from "../config/variables.js";
const appUsuario = Router();


appUsuario.use(limit(), Passport.authenticate("bearer", { session: false }));

appUsuario.get("/",version({
  "1.0.0":userv2,
}))

appUsuario.get("/consultoriospaciente/:id",version({
  "1.0.0":consultorioPaciente
}))

appUsuario.get("/citasGenero/:genero",version({
  "1.0.0":citasGenero
}))



export default appUsuario;
