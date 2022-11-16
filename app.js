const express=require('express') 
const morgan=require('morgan')
const bodyParser=require('body-parser')
const port=3000
const app = express()
app
.use(bodyParser.json())
app.listen(port,()=>console.log('notre application node est démarré sur:http//localhost:'+port))