import { SignJWT, jwtVerify } from "jose";
import { mongo } from "../conexion/mongo.js";
import { PASSWORD } from "../config/variables.js";
import { ObjectId } from "mongodb";

const db = await mongo();

const CrearToken = async (req, res, next) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).send({ status: 400, message: "Datos no enviados" });

  const busqueda = await db
    .collection("roles")
    .aggregate([
      {
        $match: {
          $and: [{ user: req.body.user }, { password: req.body.password }],
        },
      },
    ])
    .toArray();

  if (Object.keys(busqueda).length === 0)
    return res
      .status(401)
      .send({ status: 401, message: "El usuario es invalido" });

  const encoder = new TextEncoder();
  const id = busqueda;

  const createJTW = await new SignJWT({ id })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("3h")
    .sign(encoder.encode(PASSWORD));
  req.data = { status: 200, message: createJTW };
  next();
};

const validarToken = async (req, token) => {
  try {
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(token, encoder.encode(PASSWORD));
    

 let res = await db.collection("roles").findOne({
      _id: new ObjectId(jwtData.payload.id[0]._id),
      [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`,
    });
    let {_id, permisos, ...usuario} = res;


    return usuario
  } catch (error) {
    return false;
  }
};

export { CrearToken, validarToken };
