const express = require('express');

const app = express();

const middleWare = express.static('public');

app.use('/', middleWare);

app.listen(3000, function(){console.log('App started at port 3000')});