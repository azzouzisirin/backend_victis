const formation = require('../models/Formation');
const Module = require('../models/Module');
const Categorie = require('../models/Categories');

exports.Register = async (req, res) => {
    try { 
        const newutilisateur = await formation.create({nom:req.body.nom,numOrdre:req.body.numOrdre,duree:req.body.duree  ,text_1:req.body.text_1,prix:req.body.prix,programme:req.body.programme,list:req.body.list,text_2:req.body.text_2,typeModelFormation:req.body.typeModelFormation,photo:req.body.photo,categorie:req.body.categorie});
           
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

exports.getAllFormation = async (req, res) => {
    try {
        const allclients = await formation.find();

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.searchFormation = async (req,res)=>{
    const keyword = req.query.search
      ? {
          $or: [
            { nom: { $regex: req.query.search, $options: "i" } },
            { categorie: { $regex: req.query.search, $options: "i" } },
          ],
        } 
      : {};
  
    const pages = await formation.find(keyword);
  
    res.send(pages);
  }
exports.getFormationByCteg = async (req, res) => {
    try {
        const categ = await Categorie.findOne({nom:req.params.nomCateg});

        const allclients = await formation.find({categorie:req.params.nomCateg}).sort({ numOrdre: 1 });

        res.json({categ,allclients});
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getFormationById = async (req, res) => {
    try {
        const Formation= await formation.findById(req.params.id);
        const nom=Formation.nom
        const allModule = await Module.find({nomFormation:Formation.nom}).sort({ numOrdre: 1 }); 

        res.json({
            Formation:Formation,
            nom:nom,
            allModule:allModule});
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getFormationByName = async (req, res) => {
    try {
        const Formation= await formation.findOne({nom:req.params.nomForma});

        const nom=req.params.nomForma
        const allModule = await Module.find({nomFormation:nom}).sort({ numOrdre: 1 }); 

        res.json({
            Formation:Formation,
            nom:nom,
            allModule:allModule
       });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.deleteFormation = async (req, res) => {
    try {
        const Formation = await formation.findByIdAndDelete(req.params.id).sort({ numOrdre: 1 });

        res.status(200).json({
            Formation
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.updateFormation = async (req, res) => {
    try { 
        const {nom, text_1,duree,programme,list, text_2,typeModelFormation,prix, categorie,photo,numOrdre} = req.body;

        const Formation = await formation.findByIdAndUpdate(req.params.id, {nom,numOrdre,duree,programme,typeModelFormation,prix, text_1,list, text_2, categorie,photo}, { new: true });
 
        res.status(200).json({
            Formation
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};