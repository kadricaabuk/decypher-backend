import {Router} from 'express'
import {MainController} from '../controllers/index.js';
import {Auth} from '../middleware/index.js';
const HomeRoute = Router()

HomeRoute.use(Auth.validate)
HomeRoute.get('/home', MainController.home)

export default HomeRoute


