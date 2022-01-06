// const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require('./controllers/error.js');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
 
// const server = http.createServer(app);
// server.listen(3000);

// http.createServer(app).listen(3000);

app.listen(3000);
