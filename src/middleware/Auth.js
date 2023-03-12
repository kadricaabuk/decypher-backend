class Auth{
    static validate(req, res,next){
        // var token = req.header('x-auth');
        // getUserByToken(token).then((result)=>{
        //     req.user = result;
        //     req.token = token;
        //     next();
        // }).catch((e)=>{
            //     return res.status(401).send();
            // });

        next()
    }
        
}
export default Auth 