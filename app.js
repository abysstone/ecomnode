// const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');

const rootdir = require('./util/path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootdir, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: ''});
});
 
// const server = http.createServer(app);
// server.listen(3000);

// http.createServer(app).listen(3000);

app.listen(3000);
