import express from 'express'
import {MainController} from '../controllers/index.js';

const Route = express.Router()

Route.get('/', MainController.main)

export default Route;