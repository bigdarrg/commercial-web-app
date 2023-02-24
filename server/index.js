//Loading modules
const express = require('express');
//const cors = require('cors');
//const mongooseModule = require('mongoose');

//Having our environment variable in the .env file
//require('dotenv').config();

//Creating the express server
const server = express();
const port = process.env.PORT || 5000;

//Adding middleware
//server.use(cors());
server.use(express.json());

//Connecting to uri where our database is stored
//const uri = process.env.ATLAS_URI;
//mongooseModule.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true} );

//const connection = mongooseModule.connection; 
//connection.once('open', () => { //once connection is open
//    console.log("MongoDB database connection established successfully");
//}); 

//When someone goes to our URL/__site__ it will load routes/__site__.js
//const ingredientsRouter = require('./routes/ingredients');
//const recipesRouter = require('./routes/recipes');
//const foodsRouter = require('./routes/foods');
//const usersRouter = require('./routes/users');
//const authUserRouter = require('./routes/auth');

//expressServer.use('/load_data', ingredientsRouter); //needs updating


//const dietsRouter = require('./routes/diets');
//expressServer.use('/load_data', dietsRouter); //needs updating

//Starting the server
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});