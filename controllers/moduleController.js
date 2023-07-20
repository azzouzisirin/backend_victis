const Module = require('../models/Module');
const Categorie = require('../models/Categories');
const Categories = require('../models/Categories');

exports.Register = async (req, res) => {
    try { 
        const newutilisateur = await Module.create({nom:req.body.nom,photo:req.body.photo,typeModule:req.body.typeModule,forma:req.body.forma,context:req.body.context,TitreModule:req.body.TitreModule,nomFormation:req.body.nomFormation,numOrdre:req.body.numOrdre  ,text_1:req.body.text_1,progModel:req.body.progModel,programme:req.body.programme,duree:req.body.duree,prix:req.body.prix});
           
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

exports.AggreCategorie = async (req, res) => { 
    try {
        const allclients = await Module.aggregate( [
            { $group : { _id : "$nomFormation" , Module: { $push: {"TitreModule":"$TitreModule"} }}},
        
          ]).sort({ numOrdre: 1 })

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getModulByForma = async (req, res) => {
    try {

        const allmodule = await Module.find({nomFormation:req.params.nomForma}).sort({ numOrdre: 1 });

        res.json(allmodule);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getModulFormaModul = async (req, res) => {
    try {
        const Categorie = await Categories.findOne({nom:req.params.nomCateg});

        const allmodule = await Module.findOne({nomFormation:req.params.nomForma,nom:req.params.nomModul}).sort({ numOrdre: 1 });
       var photo =''
       if (!allmodule.photo){
        allmodule.photo=Categorie.photo
       }
        res.json({allmodule:allmodule});
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getAllModule = async (req, res) => {
    try {
        const allclients = await Module.find().sort({ numOrdre: 1 });

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getModuleById = async (req, res) => {
    try {
        const allclients = await Module.findById(req.params.id);

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteModule = async (req, res) => {
    try {
        const module = await Module.findByIdAndDelete(req.params.id).sort({ numOrdre: 1 });

        res.status(200).json({
            module
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.updateModule = async (req, res) => {
    try { 
        const {nom,nomFormation,photo, text_1,programme,TitreModule,progModel,typeModule,forma,context, duree,prix,numOrdre} = req.body;
 
        const module = await Module.findByIdAndUpdate(req.params.id, {nom,photo,numOrdre,forma,nomFormation,typeModule,context,TitreModule,progModel, text_1,programme, duree,prix}, { new: true });
 
        res.status(200).json({
            module
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};