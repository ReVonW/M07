const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

const dubURI = 'mongodb+srv://<db_username>:<db_password>@nodetuts.vtijw.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts'
mongoose.connect(dubURI, { useNewUrlParser: true, useUnifiesTopology: true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about' , (req, res) => {
    res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});