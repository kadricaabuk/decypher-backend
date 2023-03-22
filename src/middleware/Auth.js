import { dataValidation } from "../controllers/globalFunctions.js"

class Auth{
    static validate(req, res, next){
        const isValid = dataValidation(req.body)
        if(isValid.success){
            next()
        }else{
            res.send(isValid)
        }
    }
        
}

export default Auth 