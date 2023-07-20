 
const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    nom : { 
        type: String,
    },
    password: { 
        type: String,
    },
    email: { 
        type: String,
    },
    
},{versionKey:false});
 
const utilisateur = mongoose.model('utilisateur', UserSchema);
module.exports = utilisateur;