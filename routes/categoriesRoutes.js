const {  getAllCategorie,updateCategorie ,Register,deleteCategorie} = require('../controllers/categoriesController');
const express = require('express');
const router = express.Router();
const categorie = require('../models/Categories');

const uploadMiddleware = require("../middlewares/MulterMiddleware");

router.route('/getAllCategorie').get(getAllCategorie);
router.route('/:id').delete(deleteCategorie);
router.route('/register').post(Register);
router.route('/:id').put(updateCategorie);    

router.post("/api/save", uploadMiddleware.single("photo"),async (req, res) => {
    try {
        
    const photo = req.file.filename;
    console.log(photo)
  const nom=req.file.nom;
  const numOrdre=req.file.numOrdre;

  
    const newclient = await  categorie.create({ photo,nom,numOrdre })
    res.status(201).json({
        newclient
    });  
} catch (error) {
    res.status(400).json({
        status: 'failed',
        error
    });
}
}) 

module.exports = router;