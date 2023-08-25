import express from "express";
import { MyServer } from "./config/variables.js";
import appUsuario from "./routers/user.js";

const appExpres = express();


appExpres.use("/usuario",appUsuario)




appExpres.listen(MyServer, () => {
  console.log(`http://${MyServer.hostname}:${MyServer.port}`);
});
