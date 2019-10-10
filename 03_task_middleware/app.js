const express = require('express');
const expHbr =require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbr({
    extname: '.hbs',
    defaultLayout: null,
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const { user, house } = require('./controllers');
const { user: userMiddleware } = require('./middleware');

const { house: houseMiddleware } = require('./middleware');

const { provider } = require('./dataBase');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/auth', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    res.render('register')
});

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/house', (req, res) => {
    res.render('houses')
})

app.get('/houseProfile', (req, res) => {
    res.render('houseProfile')
})

app.post('/users', userMiddleware.checkUserValidityMiddleware, user.createUser);
app.get('/users/:userId', userMiddleware.isUserPresentMiddleware, user.getById);
app.post('/auth', userMiddleware.isUserInDBMiddleware, user.getUserInDB);

app.post('/house', house.createHouse);
app.get('/houses/:houseId', houseMiddleware.isHousePresentMiddleware, house.getById);

app.all('*', async (req, res) => {
    res.status(404).json('404. NOT FOUND! SORRY...');
})

app.listen(3000, () => {
    console.log(3000);
});

