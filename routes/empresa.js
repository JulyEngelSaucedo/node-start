const express = require('express');
const router = express.Router();

router.post('/', async (request, response) => {
  
  const { nome, endereco, bairro, cep, cnpj, tax_indentification_number, telefone, fax, email, site } = request.body
  const empresa = new empresa({ nome, endereco, bairro, cep, cnpj, tax_indentification_number, telefone, fax, email, site })
  await produto.save()
  response.send(produto)

})

module.exports = router;