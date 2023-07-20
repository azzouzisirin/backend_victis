const sessionFormation = require('../models/SessionFormation');


exports.Register = async (req, res) => {
    try { 
        const newutilisateur = await sessionFormation.create({formation:req.body.formation,categorie:req.body.categorie,module:req.body.module,idmodule:req.body.idmodule,duree:req.body.duree,prix:req.body.prix  ,numDordre:req.body.numDordre,Session:req.body.Session,membres:req.body.membres});
           
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
exports.updateSession = async (req, res) => {
    try { 
        const {formation,duree, prix,numDordre,idmodule,module,categorie,Session,membres} = req.body;

        const moduless = await sessionFormation.findByIdAndUpdate(req.params.id, {formation,categorie,module,duree,prix ,idmodule,numDordre,Session,membres}, { new: true });
 
        res.status(200).json({
            moduless
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.deleteSession = async (req, res) => {
    try {
        const session = await sessionFormation.findByIdAndDelete(req.params.id);

        res.status(200).json({
            session
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getAllFormation = async (req, res) => {
    try {
        const allclients = await sessionFormation.find().sort({ numDordre: 1 });

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.pushMembre = async (req, res) => {
    try {
        const allclients = await sessionFormation.updateOne(
            { _id: req.params.id },
            { $push: { membres: req.body.membres } }
         );

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

 
exports.getAllFormationbetweenData = async (req, res) => {
    try {
        const allclients = await sessionFormation.find({dateDebut:{$gte:req.body.dateDebut,
        $lte: req.body.dateFin}})

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getSessionById = async (req, res) => {
    try {
        const allclients = await sessionFormation.findById(req.params.id);

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
