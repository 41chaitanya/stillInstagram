export const errorHandler=(err,req,res,next)=>{
    res.status(err.statusCode|| 500).json({
        sucess:false,
        message:err.message ||"message bataya nahi error ka "
    })
}