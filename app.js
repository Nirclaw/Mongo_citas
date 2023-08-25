import express from "express";
import { MyServer } from "./config/variables.js";

const appExpres = express();







appExpres.listen(MyServer, () => {
  console.log(`http://${MyServer.hostname}:${MyServer.port}`);
});
