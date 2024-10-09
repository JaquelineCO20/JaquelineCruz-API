// const express=require('express');
// const app=express();
const express = require('express')
const cors = require('cors')
const multer  = require('multer')
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const app = express()
const upload = multer()

app.use(cors({origin:"*"})) //app.use(cors()) //middleware de terceros
app.use(express.json());  //middleware incorporado en express
app.use(express.text()); //middleware incorporado en express
app.use(express.urlencoded({extended:true})); //midlleware para parsear un formulario urlencoded
app.use(upload.none())
app.use(bodyParser.xml());  //middleware para archivos xml


app.post('/Alumnos',(req,res)=>{
    console.log(req.body);
    res.json({mensaje:"Server contestado a petición post"})
})

app.listen(3001,()=>{
    console.log('Server Express escuchando desde el puerto 3001')
})
