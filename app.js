import express from "express";
import { MyServer } from "./config/variables.js";
import appUsuario from "./routers/user.js";
import { appLogin } from "./routers/login.js";
import appCitas from "./routers/citas.js";
import appMedico from "./routers/medico.js";

const appExpres = express();
appExpres.use(express.json())
appExpres.use("/login",appLogin)
appExpres.use("/usuario",appUsuario)
appExpres.use("/cita",appCitas)
appExpres.use("/medico",appMedico)



appExpres.listen(MyServer, () => {
  console.log(`http://${MyServer.hostname}:${MyServer.port}`);
});
