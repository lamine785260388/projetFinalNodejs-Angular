const express=require('express') 
const morgan=require('morgan')
const bodyParser=require('body-parser')
const port=3000
const app = express()
const  sequelize=require('./src/db/sequelize')

app
.use(bodyParser.json())
.use(morgan('dev'))

sequelize.initDb()
require('./src/root/createUser')(app)

app.use(({res})=>{
     const message="impossible de trouver la ressource demandé! vous pouvez essayer une autre url"
    res.status(404).json({message})
    })
app.listen(port,()=>console.log('notre application node est démarré sur:http//localhost:'+port))