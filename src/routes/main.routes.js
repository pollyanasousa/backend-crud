const express = require('express');
const router = express.Router();
const Contato = require('../models/contato');

//rota para recuperar todos os registros
router.get('/', async (req,res) =>{
    try{
       const contatos = await Contato.find({});
       res.json({error: false, contatos: contatos });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
  });

//rota para recuperar um registro
router.get('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const contato = await Contato.findById(id);
        res.json({ error: false, contato });
    } catch(err) {
        res.json({ error: true, message: err.message });
    } 
  });

//rota para criar um registro
router.post('/', async (req,res) => {
    try {
     const contato = req.body;
     const response = await new Contato(contato).save();
      res.json({error: false, contato: response });
    } catch(err) {
        res.json({ error: true, message: err.message });
    }
  });

//rota para atualizar registro
router.put('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const novo_contato = req.body;
        const contato = await Contato.findByIdAndUpdate(id, novo_contato);
        res.json({ error: false, contato});
    } catch(err){
        res.json({ error: true, message: err.message });
    }    
  });

//rota para deletar registro
router.delete('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        await Contato.findByIdAndDelete(id);
        res.json({ error: false  });
    } catch(err){
        res.json({ error: true, message: err.message });
    }     
 });

module.exports = router;
