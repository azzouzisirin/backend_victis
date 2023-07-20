const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv')
const app = express();


const bodyParser = require('body-parser');
env.config()
 

const utilisateurRoutes = require('./routes/utilisateurRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const formationRoutes = require('./routes/formationRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const detailFormationRoutes = require('./routes/DetailFormationRoutes');
const sessionFormation = require('./routes/SessionFormationRoutes');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const port = process.env.PORT || 4000;






// MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser());
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
// ROUTES

app.use('/utilisateur', utilisateurRoutes);
app.use('/categorie', categoriesRoutes);
app.use('/formation', formationRoutes);
app.use('/module', moduleRoutes);
app.use('/sessionFormation', sessionFormation);

app.use('/detailFormation', detailFormationRoutes);








mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Successfully connected to database.');
});
mongoose.set('strictQuery', false)

app.get('/', (req, res) => {
    res.send("Backend est bien travailler")
});

app.listen(port, ()=>{
    console.log(`Listening port on ${port}`)
});