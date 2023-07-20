const utilisateur = require('../models/utilisateur');

exports.Register = async (req, res) => {
    try { 
       console.log(req.body.email)
        const newutilisateur = await utilisateur.create({email:req.body.email,name:req.body.name,password:req.body.password});
           
        res.status(201).json({
            newutilisateur
        }); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.Login = async(req, res) => {
    if(req.body.password && req.body.email){
      let user=await utilisateur.findOne({password:req.body.password,email:req.body.email})
      if(user){
          res.send(user)
      }else{
          res.send({resultat:"Utilisateur inexistant"})
      }
    }else{
      res.send({resultat:"Remplir tous les champs"})
    }
  
  };

