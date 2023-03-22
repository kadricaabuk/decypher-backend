import {Router} from 'express'
import {UserController} from '../controllers/index.js';
import {Auth} from '../middleware/index.js';
const UserRoute = Router()
const {main, login, getByEmail} = UserController
const handleRouteString = (route) => route ? `/user/${route}` : '/user';


UserRoute.use(Auth.validate)
UserRoute.get(handleRouteString(), main)
UserRoute.post(handleRouteString(), main)
UserRoute.post(handleRouteString('login'), login)
UserRoute.get(handleRouteString('query'), getByEmail)

export default UserRoute