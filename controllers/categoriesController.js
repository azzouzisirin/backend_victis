const categorie = require('../models/Categories');

exports.getAllCategorie = async (req, res) => {
    try {
        const allclients = await categorie.find().sort({ numOrdre: 1 });

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.Register = async (req, res) => {
    try {
       
        const newclient = await categorie.create({nom:req.body.nom,textHome:req.body.textHome,numOrdre:req.body.numOrdre,photo:req.body.photo});
        
        res.status(201).json({
            newclient
        });  
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteCategorie = async (req, res) => {
    try {
        const Categorie = await categorie.findByIdAndDelete(req.params.id).sort({ numOrdre: 1 });

        res.status(200).json({
            Categorie
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.updateCategorie = async (req, res) => {
    try { 
        const {nom,textHome, photo,numOrdre} = req.body;

        const Categorie = await categorie.findByIdAndUpdate(req.params.id, {nom,textHome,numOrdre, photo}, { new: true });
 
        res.status(200).json({
            Categorie
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};