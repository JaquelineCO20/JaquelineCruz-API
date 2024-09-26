// const express=require('express');
// const app=express();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors())

// app.use(cors({origin:"*"}))

app.get('/sendFile',(req,res)=>{
    let archivo=path.join(__dirname,'/imagenes/FUYU2.jpg');
    res.sendFile(archivo);
})

app.get('/download',(req,res)=>{
    let archivo=path.join(__dirname,'/imagenes/FUYU2.jpg');
    res.download(archivo)
})

app.get('/attachment',(req,res)=>{
    let archivo=path.join(__dirname,'/imagenes/FUYU2.jpg');
    res.attachment(archivo)
    res.send()
})

app.listen(3000,()=>{
    console.log('Server Express escuchando desde el puerto 3000')
})

