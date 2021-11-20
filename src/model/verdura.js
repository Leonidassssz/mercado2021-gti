const mongoose = require('mongoose')

const verduraSchema = mongoose.Schema({
    nome: {type: String},
    tipo: {type: String},
    local:{type: String},
    quantidade:{type: Number},
    status: {type: String, enum:['ativo','inativo'], default: 'ativo'}
},{timestamps:true})

module.exports = mongoose.model('verdura', verduraSchema)