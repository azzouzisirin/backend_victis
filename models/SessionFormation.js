 
const mongoose = require('mongoose');

var FormationSchema = new mongoose.Schema({
    categorie : { 
        type: String,
    },
    formation : { 
        type: String,
    },
    module : { 
        type: String,
    },
    idmodule : { 
        type: String,
    },
    duree: { 
        type: String,

    },
    prix: { 
        type: String, 

    }, 

    numDordre: {  
        type: String,


    },
    Session: { 
        type: Object,
        default:[]
    },
    membres: { 
        type: Object,
        default:[]
    },
   
  
},{versionKey:false});
 
const Formation = mongoose.model('SessionFormation', FormationSchema);
module.exports = Formation;