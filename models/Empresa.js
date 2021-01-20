const { Schema, model } = require('mongoose');
const schema = new Schema({
  nome: string,
  endereco: string,
  bairro: string,
  cep: string,
  cnpj: string,
  tax_indentification_number: string,
  telefone: string,
  fax: string,
  email: string,
  site: string,

})

const Empresa = model("Empresa", schema)

module.exports = Empresa