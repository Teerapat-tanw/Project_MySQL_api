
const express = require('express')
var app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(cors())

const product_user = require('./routers/user')
app.use('/users',product_user);


const product_sensor = require('./routers/sensors')
app.use('/sensors',product_sensor);



module.exports = app ;