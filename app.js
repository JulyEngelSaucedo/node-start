const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {conectarMongo} = require('./db_connection');
const Produto = require('./models/Produto');
const Empresa = require('./models/Empresa');
const bodyParser = require('body-parser');

const empresasRoutes = require('./routes/empresa');

conectarMongo().then(()=>{
 console.log("Conectado!") 
}).catch(error =>{console.log(error)})

app.use(bodyParser.json());
app.use('/empresas',empresasRoutes);


app.listen(3000);