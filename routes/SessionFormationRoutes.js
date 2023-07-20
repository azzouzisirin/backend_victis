const {  Register,deleteSession ,getAllFormation,pushMembre,updateSession,getAllFormationbetweenData,getSessionById} = require('../controllers/sessionFormationController');
const express = require('express');
const router = express.Router();

router.route('/register').post(Register);
router.route('/getAllSession').get(getAllFormation);

router.route('/getAllFormationbetweenData').post(getAllFormationbetweenData);
router.route('/:id').get(getSessionById);
router.route('/:id').put(pushMembre);
router.route('/updateSession/:id').put(updateSession);
router.route('/:id').delete(deleteSession);

module.exports = router; 