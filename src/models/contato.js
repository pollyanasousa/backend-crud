const mongoose = require('mongoose');

const Contato = mongoose.model('Contato', {
   nome: {
       type: String,
       required: true,
   },
   telefone: {
       type: Number,
       required: true,
   },
   celular: {
       type: Number,
       required: true,
   },
   email: {
       type: String,
       required: true,
   },
   endereco: {
       type: String,
       required: true,
   }
});

module.exports = Contato;