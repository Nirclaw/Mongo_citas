import { mongo } from "../../conexion/mongo.js";
let db = await mongo();
let user = db.collection("cita");
export const citasv1 = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $sort: { cit_estadoCita: 1 }, // 1 para orden ascendente, -1 para descendente
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
    res.status(401).send({ status: 401, message: error });
  }
};

export const citasUsuario = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            cit_datosUsuario: parseInt(req.params.id),
          },
        },
        {
          $sort: {
            cit_fecha: -1,
          },
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
    res.status(401).send({ status: 401, message: error });
  }
};

export const IdMedico = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            cit_medico: parseInt(req.params.id),
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ]).toArray();
    res.send(data);
  } catch (error) {
    res.status(401).send({ status: 401, message: error });
  }
};

export const consultorias = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $lookup: {
            from: "medico",
            localField: "cit_medico",
            foreignField: "med_nroMatriculaProfesional",
            as: "datos",
          },
        },
        {
          $match: {
            cit_datosUsuario: parseInt(req.params.id),
          },
        },
        {
          $project: {
            _id: 0,
            "datos._id": 0,
            "datos.med_nroMatriculaProfesional": 0,
            "datos.med_nombrCompleto": 0,
            "datos.med_especialidad": 0,
          },
        },
      ])
      .toArray();
    res.send(data);
  } catch (error) {
    res.satus(401).send({ status: 401, message: error });
  }
};

export const fecaCita = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            cit_fecha: req.params.fecha,
          },
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
    res.satus(401).send({ status: 401, message: error });
  }
};



export const NumCitas = async (req, res) => {
  try {
    console.log(req.body.id);
    let data = await user
      .aggregate([
        {
          $match: {
            $and: [
              { id: parseInt(req.body.id) },
              { fecha: req.body.fecha },
            ],
          },
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
    res.satus(401).send({ status: 401, message: error });
  }
};

export const rechazadas = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            $and: [{ cit_fecha: /2023-08/ }, { cit_estadoCita: "Confirmada" }],
          },
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
    res.satus(401).send({ status: 401, message: error });
  }
};
