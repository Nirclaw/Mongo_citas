import { mongo } from "../../conexion/mongo.js";
let db = await mongo();
let user = db.collection("usuario");
export const userv2 = async (req, res) => {
  try {
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
};

export const consultorioPaciente = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            "usu_documento.numero": parseInt(req.params.id),
          },
        },
        {
          $lookup: {
            from: "cita",
            localField: "usu_documento.numero",
            foreignField: "cit_datosUsuario",
            as: "citas_total_paciente",
          },
        },
        {
          $lookup: {
            from: "medico",
            localField: "citas_total_paciente.cit_medico",
            foreignField: "med_nroMatriculaProfesional",
            as: "consultorio",
          },
        },
        {
          $project: {
            _id: 0,
            usu_acudiente: 0,
            citas_total_paciente: 0,
            "consultorio._id": 0,
            "consultorio.med_nroMatriculaProfesional": 0,
            "consultorio.med_nombrCompleto": 0,
            "consultorio.med_especialidad": 0,
            "consultorio.rol": 0,
            "consultorio.permisos": 0,
            "consultorio.password": 0,
          },
        },
      ])
      .toArray();
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const citasGenero = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            usu_genero: req.params.genero,
          },
        },
        {
          $lookup: {
            from: "cita",
            localField: "usu_documento.numero",
            foreignField: "cit_datosUsuario",
            as: "result",
          },
        },
        {
          $match: {
            "result.cit_estadoCita": "Confirmada",
          },
        },
        {
          $project: {
            _id: 0,
            usu_acudiente: 0,
            "result._id": 0,
          },
        },
      ])
      .toArray();

    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
