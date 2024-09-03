// const express=require('express');
// const app=express();
const express = require('express')
const app = express()
const cors = require('cors')

// app.use(cors({origin:"*"}))

app.get('/',(req,res)=>{
    res.send('server express contestando a petición get')
})

app.post('/',(req,res)=>{
    res.send('server express contestando a petición post')
})

app.listen(3000,()=>{
    console.log('Server Express escuchando desde el puerto 3000')
})

