import Routes from './src/routes/index.js'
import express from 'express'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())

Routes.forEach(({route}) => {
    app.use(route)
});



app.listen(3000)