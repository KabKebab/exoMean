let express = require('express');
let model = require('../model/tasks.model');
let router = express.Router();

router.get('/:userId',(req,res)=>{
    model.find({idUser: req.params.userId}).then(data=>res.json(data));
});

router.get('/getOne/:taskId',(req,res)=>{
    model.findById(req.params.taskId).then(data=>res.json(data));
});

router.post('/',(req,res)=>{
    let newTask = model({
        nom: req.body.nom,
        detail: req.body.detail,
        etat: req.body.etat,
        idUser: req.body.user
    })
    newTask.save().then(()=>res.json("Tache ajoutée"));
})

router.put('/:id',(req,res)=>{
    model.findById(req.params.id).then(data => {
        data.nom = req.body.nom;
        data.detail = req.body.detail;
        data.etat = req.body.etat;
        data.save().then(()=>res.json("Tache modifiée"));
    })
})

router.delete('/:id',(req,res)=>{
    model.findByIdAndDelete(req.params.id).then(()=>{
        res.json("Tache supprimée");
    })
})

module.exports = router;
