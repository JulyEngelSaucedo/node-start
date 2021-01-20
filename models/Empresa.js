const { Schema, model } = require('mongoose');
const schema = new Schema({
  nome: String,
  endereco: String,
  bairro: String,
  cep: String,
  cnpj: String,
  tax_indentification_number: String,
  telefone: String,
  fax: String,
  email: String,
  site: String

})

const Empresa = model("Empresa", schema)

module.exports = Empresa