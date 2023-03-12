import { handleResponse } from "../globalFunctions.js";
import { getAll, saveUser } from "./UserFunctions.js";
class UserController {
    static async main(req, res){
        if(req.method == "GET"){
            const users = await getAll()
            const response = handleResponse(users)
            res.send(response);
        }else{
            const {body} = req
            const user = await saveUser(body)
            const response = handleResponse(user)
            res.send(response)
        }
    }
    static home(req, res){
        res.send('Hello from home of main controller');
    }
}

export default UserController