export const userV1 = (req,res,next)=>{
    
    console.log("por fin");
    res.status(200).send(req.data)
} 