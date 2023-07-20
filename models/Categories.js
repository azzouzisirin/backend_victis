 
const mongoose = require('mongoose');

var CategoriesSchema = new mongoose.Schema({
    nom : { 
        type: String,
    },
    photo : { 
        type: String,
    },
    textHome : { 
        type: String,
    },
    numOrdre : { 
        type: Number,
    }
},{versionKey:false});
 
const Categories = mongoose.model('Categories', CategoriesSchema);
module.exports = Categories;