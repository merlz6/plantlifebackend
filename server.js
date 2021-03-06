
const express = require('express'); //Express
const app = express(); //Create app object
// const mongoose = require('mongoose'); //bring in mongoose
// const Plant = require('./models/plant.js'); //GM Model
// const methodOverride = require('method-override'); //Method Override
const plantController = require('./controllers/plant.js'); //GM Controller
require('dotenv').config(); //Process.env holds all your env variables
const port = process.env.PORT || 3000; // Port Number
const fetch = require('node-fetch');
const cors = require('cors')
// const DBURI = process.env.MONGOURI; //Mongo DB URI
// const userController = require('./controllers/users.js'); //Users Controller - Login for this?
// const session = require('express-session'); //Session Middlewhere
// const User = require('./models/users.js'); // User Model
// const bcrypt = require('bcryptjs'); //bcrypt to encrypt passwords

const corsOptions = {

  origin: process.env.cor,
  optionsSuccessStatus:200

}

// app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
// app.use(
//     session({
//         secret: process.env.SECRET,
//         resave: false,
//         saveUninitialized: false,
//     })
// );
app.use(cors(corsOptions))
app.use('/plant', plantController);


// mongoose connection - Am I going to use DB?
// mongoose.connect(DBURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// mongoose.connection.once('open', () => {
//     console.log('connected to mongo');
// });

app.get('/', (req,res)=> {

res.send("howdy")


})

app.listen(port, () => {
    console.log('listening on: ' + port);
});
