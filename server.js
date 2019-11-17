require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const db = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public"
// directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});