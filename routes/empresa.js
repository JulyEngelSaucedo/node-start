const express = require('express');
const router = express.Router();
const Empresa = require('../models/Empresa')
router.post('/', async (request, response) => {
  
  const { nome, endereco, bairro, cep, cnpj, tax_indentification_number, telefone, fax, email, site } = request.body
  const empresa = new Empresa({ nome, endereco, bairro, cep, cnpj, tax_indentification_number, telefone, fax, email, site })
  await empresa.save()
  response.send(empresa)

})

module.exports = router;