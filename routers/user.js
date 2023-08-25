import { Router } from "express";
import { mongo } from "../conexion/mongo.js";
import { limit } from "../middleware/limit.js";

const appUsuario = Router();
let db = await mongo();

appUsuario.get("/", limit(), async (req, res) => {
  try {
    let user = db.collection("usuario");
    let data = await user
      .aggregate([
        {
          $sort: { usu_nombre_completo: 1 }, // 1 para orden ascendente, -1 para descendente
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default appUsuario;
