import env from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import Routes from './src/routes/index.js'
import {auth} from 'express-openid-connect'

env.config()
const app = express()

const { AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, BASE_URL, AUTH_DOMAIN } = process.env

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: AUTH_CLIENT_SECRET,
    baseURL: BASE_URL,
    clientID: AUTH_CLIENT_ID,
    issuerBaseURL: AUTH_DOMAIN
};

app.use(auth(config))
app.use(bodyParser.json())

Routes.forEach(({route}) => {
    app.use(route)
});



app.listen(3000)