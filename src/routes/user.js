import {Router} from 'express'
import {UserController} from '../controllers/index.js';
import {Auth} from '../middleware/index.js';
const UserRoute = Router()

UserRoute.use(Auth.validate)
UserRoute.get('/user', UserController.main)
UserRoute.post('/user', UserController.main)

export default UserRoute