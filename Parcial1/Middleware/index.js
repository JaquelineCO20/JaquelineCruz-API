// const express=require('express');
// const app=express();
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({origin:"*"})) //app.use(cors()) //middleware de terceros
app.use((req,res,next)=>{   //middleware de aplicacion
    console.log(new Date());
    next();
})
app.use(express.json()) //middleware incorporado en express

app.get('/',cors(),(req,res)=>{
    // res.send('server express contestando a petición get')
    res.json({mensaje:"Server contestado a petición get"})
    next(error);
})

app.post('/',(req,res)=>{
    res.send('server express contestando a petición post')
})

app.listen(3001,()=>{
    console.log('Server Express escuchando desde el puerto 3001')
})

//midleware de manejo de errores
app.use(function(err,req,res,next){
    res.status(500).send("Algo no ha ido bien!");
})
