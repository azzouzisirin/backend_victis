 
const mongoose = require('mongoose');

var FormationSchema = new mongoose.Schema({
    nom : { 
        type: String,
    },
    text_1: { 
        type: Object,
        default:[]
    },
    list: { 
        type: Object,
        default:[]
    },
    text_2: { 
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
    typeModelFormation : { 
        type: String,
    },
    categorie: { 
        type: String,

    },
    photo : { 
        type: String,
    },
    numOrdre : { 
        type: Number,
    }
  
},{versionKey:false});
 
const Formation = mongoose.model('Formation', FormationSchema);
module.exports = Formation;