import { Router } from "express";
import { limit } from "../middleware/limit.js";
import { version } from "../config/variables.js";
import {
  IdMedico,
  NumCitas,
  citasUsuario,
  citasv1,
  consultorias,
  fecaCita,
  rechazadas,
} from "../versiones/v1/citasv1.js";
import Passport from "../cript/pasporthelp.js";

const appCitas = Router();
appCitas.use(limit(), Passport.authenticate("bearer", { session: false }));

appCitas.get(
  "/",
  version({
    "1.0.0": citasv1,
  })
);

appCitas.get(
  "/:id",
  version({
    "1.0.0": citasUsuario,
  })
);

appCitas.get(
  "/medico/:id",
  version({
    "1.0.0": IdMedico,
  })
);
appCitas.get(
  "/paciente/:id",
  version({
    "1.0.0": consultorias,
  })
);
appCitas.get(
  "/fecha-cita/:fecha",
  version({
    "1.0.0": fecaCita,
  })
);



appCitas.get("/numCitas",version({
    "1.0.0":NumCitas
}))

appCitas.get("/rechazadas",version({
  "1.0.0":rechazadas
}))

export default appCitas;
