 
const mongoose = require('mongoose');

var ModuleSchema = new mongoose.Schema({
    nom : { 
        type: String,
    }, 
      
    text_1: { 
        type: Object,
        default:[]
    },

    programme: { 
        type: Object,
        default:[]
    },
   
    duree: { 
        type: String,


    },
    prix: { 
        type: String,

    },

   
  
},{versionKey:false});
 
const Module = mongoose.model('DetailFormation', ModuleSchema);
module.exports = Module;