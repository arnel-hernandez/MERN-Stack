const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const items = require('./routes/api/items')

const app = express();

//bodyparser middleware & cors(google chrome)

app.use(bodyParser.json())
app.use(cors());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db,{useNewUrlParser: true})
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err));

//USE ROUTES
app.use('/items', items)

//TO DEPLOY
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server Started On Port ${port}`))