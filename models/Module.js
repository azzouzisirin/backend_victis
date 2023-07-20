 
const mongoose = require('mongoose');

var ModuleSchema = new mongoose.Schema({
    nom : { 
        type: String,
    },
    typeModule : { 
        type: String,
    },
       nomFormation : { 
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
    progModel: { 
        type: Object,
        default:[]
    },

    forma: { 
        type: Object,
        default:{}
    },

    context: { 
        type: Object,
        default:[]
    },
    TitreModule: { 
        type: String,

    },
    duree: { 
        type: String,


    },
    prix: { 
        type: String,

    },
    photo : { 
        type: String,
    },
    numOrdre : { 
        type: Number,
    }
  
},{versionKey:false});
 
const Module = mongoose.model('Module', ModuleSchema);
module.exports = Module;