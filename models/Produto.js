const {Schema, model} = require('mongoose');



const schema = new Schema({
  nome:String,
  preco:Number
})

const Produto = model("Produto",schema)

module.exports = Produto