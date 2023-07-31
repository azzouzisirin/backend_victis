const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv')
const app = express();
const { SitemapStream, streamToPromise } = require('sitemap');

const multer = require('multer');

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

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  // Route to handle image upload
  app.post('/api/upload', upload.single('image'), (req, res) => {
    // Access the uploaded image from req.file
    const uploadedImage = req.file;
  
    // Save the image URL or other relevant data to MongoDB
    // (You may also store the image binary data directly in MongoDB)
  
    // Replace 'your-image-model' with the name of your MongoDB collection/model
    YourImageModel.create({ imageUrl: uploadedImage.path })
      .then(() => {
        res.send('Image uploaded successfully');
      })
      .catch((error) => {
        console.error('Error saving image:', error);
        res.status(500).send('Error saving image');
      });
  });
  
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





app.get('/sitemap.xml', async (req, res) => {
  try {
    const links = [
      { url: '/', changefreq: 'daily', priority: 0.9 },
      { url: '/about', changefreq: 'monthly', priority: 0.7 },
      // Add more URLs here
    ];

    const stream = new SitemapStream({
      hostname: 'https://victis.fr',
    });

    // Add each URL to the sitemap stream
    links.forEach(link => {
      stream.write(link);
    });

    stream.end();
    const sitemap = await streamToPromise(stream);
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

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