import { mongo } from "../../conexion/mongo.js";


let db = await mongo()
let user = db.collection("medico")

export const medicos = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $project: {
            _id: 0,
            rol:0,
            permisos:0,
            password:0
          },
        },
      ]).toArray();
    res.send(data);
  } catch (error) {
    res.status(401).send({ status: 401, message: error });
  }
};
export const medicov1 =async(req,res)=>{
    try {
        
        let data = await user.aggregate([
            {
              $match: {
                med_especialidad: /Cardiología/,
              },
            },
            {
              $project: {
                _id: 0,
              },
            },
          ]).toArray();
          
          res.send(data)
    } catch (error) {
        res.satus(401).send({status:(401),message:error})
    }
}