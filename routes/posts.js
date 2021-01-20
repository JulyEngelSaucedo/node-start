const express = require('express');
const router = express.Router();

router.post('/produtos',async (request, response) =>{

  const {nome,preco} = request.body
  const produto = new Produto({nome:nome,preco:preco})
  
  await produto.save()
  response.send(produto)

})

router.post('/produtos',async (request, response) =>{

  const {nome,preco} = request.body
  const produto = new Produto({nome:nome,preco:preco})
  
  await produto.save()
  response.send(produto)

})

module.exports = router;