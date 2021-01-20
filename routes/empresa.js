const express = require('express');
const router = express.Router();
const Empresa = require('../models/Empresa')
router.post('/', async (request, response) => {


  try {
    const { nome, endereco, bairro, cep, cnpj, tax_indentification_number, telefone, fax, email, site } = request.body
    const empresa = new Empresa({ nome, endereco, bairro, cep, cnpj, tax_indentification_number, telefone, fax, email, site })
    await empresa.save()
    response.send(empresa)

  } catch (err) {
    response.send({ message: err })
  }
})

router.get('/obter', async (request, response) => {
  try {
    const empresas = await Empresa.find();
    response.send(empresas);
  } catch (err) {
    console.log(err)
    response.send({ message: err })
  }


})

module.exports = router;