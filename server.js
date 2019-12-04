// const express = require('express');
// const app = express();
// const PORT = 3009;
// app.listen(PORT);

const env = 'dev';
const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const fs = require('fs');
const mongoose = require('mongoose');
const _overides = require(path.join(__dirname, 'lib', 'cupcake.js'))();
const routes = require(path.join(__dirname, 'routes'));
const frontendRoutes = require(path.join(__dirname, 'frontend_routes'));
const config = require(path.join(__dirname, 'config'))[env];
const dbInit = require(path.join(__dirname, 'dbConnection'))(config);

// const cors = require('cors');
// var corsOptions = {
//   origin: 'http://localhost:8080',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));

const port = config.port;
const router = express.Router();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

routes(router);
frontendRoutes(router);

app.use('/', router);
app.use('/api', router);
app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('\n===================================');
console.log('     RESTful API Endpoints on:  ' + port + ' /api');
console.log('===================================\n');
