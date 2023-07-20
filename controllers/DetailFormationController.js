const Module = require('../models/DetailFormation');
  
exports.Register = async (req, res) => {
    try { 
        const newutilisateur = await Module.create({nom:req.body.nom ,text_1:req.body.text_1,programme:req.body.programme,duree:req.body.duree,prix:req.body.prix});
           
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
 
exports.getAllModule = async (req, res) => {
    try { 
        const allclients = await Module.find();

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getModuleByNom = async (req, res) => {
    try {
        const allclients = await Module.findOne({nom:req.params.nomFormation});

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
        const {nom, text_1,programme, duree,prix} = req.body;

        const module = await Module.findOneAndUpdate({nom:req.params.nomForma}, {nom, text_1,programme, duree,prix}, { new: true });
 
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