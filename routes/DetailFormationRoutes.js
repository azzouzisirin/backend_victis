const {  Register ,getAllModule,deleteModule,updateModule,getModuleByNom} = require('../controllers/DetailFormationController');
const express = require('express');
const router = express.Router();
 
router.route('/register').post(Register);
router.route('/getAllModule').get(getAllModule);
 
router.route('/getModuleByNom/:nomFormation').get(getModuleByNom);
router.route('/:id').delete(deleteModule);
router.route('/:nomForma').put(updateModule);   

module.exports = router; 