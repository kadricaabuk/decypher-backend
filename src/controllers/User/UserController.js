import { handleResponse } from "../globalFunctions.js";
import { getAll, saveUser, loginUser, getUserByEmail } from "./UserFunctions.js";
class UserController {
    static async main(req, res){
        if(req.method == "GET"){
            const users = await getAll()
            let response = {}
            if(users.length){
                response = handleResponse({
                    response: users
                })
            }else{
                response = handleResponse({
                    response: [],
                    statusCode: 204,
                    success: false,
                    message: "Users are not found!"
                })
            }
            res.send(response);
        }else{
            const {body} = req
            const user = await saveUser(body)
            let response = {}
            if(user.name){
                response = handleResponse({
                    statusCode: 201,
                    response: user,
                    message: "User created, successfully!"
                })
            }else {
                response = handleResponse({
                    response: [],
                    statusCode: 400,
                    success: false,
                    message: "User can not created!"
                })
            }
            res.send(response)
        }
    }
    static async getByEmail(req, res){
        const {email} = req.query;
        const user = await getUserByEmail(email);
        let response = {}
        if(user.length){
            response = handleResponse({
                response: user
            })
        }else{
            response = handleResponse({
                response: [],
                statusCode: 204,
                success: false,
                message: "User is not found!"
            })
        }
        res.send(response)
    }
    static async login(req, res){
        const {body} = req
        const user = await loginUser(body)
        let response = {}
        if(user.length){
            response = handleResponse({
                response: user,
                message: "Login successfull!"
            })
        }else{
            response = handleResponse({
                response: [],
                statusCode: 204,
                success: false,
                message: "User is not found!"
            })
        }
        res.send(response)
    }
}

export default UserController