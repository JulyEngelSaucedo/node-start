const mongoose = require('mongoose');
require('dotenv').config();

const url=process.env.DB_CONECTION;

function conectarMongo(){
 return mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = {
  conectarMongo:conectarMongo,
  url:url
}

