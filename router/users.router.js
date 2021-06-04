let express = require('express');
let model = require('../model/users.model');
let router = express.Router();

router.get('/',(req,res)=>{
    model.find().then(data=>res.json(data));
});

router.get('/:id',(req,res)=>{
    model.findById(req.params.id).then(data=>res.json(data));
});

router.post('/',(req,res)=>{
    let newTask = model({
        nom: req.body.nom,
        pass: req.body.pass
    })
    newTask.save().then(()=>res.json({message:"Utilisateur ajouté"}));
})

router.post('/connect',(req,res)=>{
    model.findOne({nom: req.body.nom}).then(data=>{
        if(data && data.pass == req.body.pass){
            res.json({message:'ok',id:data._id});
        }
        else{
            res.json({message:'ko'});
        }
    })
})

router.put('/:id',(req,res)=>{
    model.findById(req.params.id).then(data => {
        data.nom = req.body.nom;
        data.pass = req.body.pass;
        data.save().then(()=>res.json("Utilisateur modifié"));
    })
})

router.delete('/:id',(req,res)=>{
    model.findByIdAndDelete(req.params.id).then(()=>{
        res.json("Utilisateur supprimé");
    })
})

module.exports = router;