// const express = require('express');
// const app = express();
// const PORT = 3009;
// app.listen(PORT);

const env = 'dev';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const _overides = require(path.join(__dirname, 'lib', 'cupcake.js'))();
const routes = require(path.join(__dirname, 'routes'));
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

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

routes(router);

app.use('/api', router);

app.listen(port);

console.log('\n===================================');
console.log('     RESTful API Endpoints on:  ' + port + ' /api');
console.log('===================================\n');
