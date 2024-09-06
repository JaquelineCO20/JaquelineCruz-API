// const express=require('express');
// const app=express();
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({origin:"*"})) //app.use(cors()) //middleware de terceros
app.use(express.json());
app.use(express.text()); //middleware incorporado en express

app.get('/Alumnos/:id',cors(),(req,res)=>{
    console.log(req.params)
    // res.send('server express contestando a petición get')
    res.json({mensaje:"Server contestado a petición get"})
    next(error);
})

app.post('/Alumnos',(req,res)=>{
    console.log(req.body);
    res.json({mensaje:"Server contestado a petición post"})
})

app.put('/Alumnos',(req,res)=>{
    console.log(req.body);
    res.json({mensaje:"Server contestado a petición get"})
})

app.listen(3001,()=>{
    console.log('Server Express escuchando desde el puerto 3001')
})
