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

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/users/auth', (req, res) => {
    res.render('login');
});
app.get('/users', (req, res) => {
    res.render('register')
});
app.get('/profile', (req, res) => {
    res.render('profile')
})
app.get('/users/update', (req, res) => {
    res.render('updateUser')
})

app.get('/houses', (req, res) => {
    res.render('houses')
})
app.get('/houseProfile', (req, res) => {
    res.render('houseProfile')
})
app.get('/houses/update', (req, res) => {
    res.render('updateHouse')
})

app.get('/users/:userId', userMiddleware.isUserPresentMiddleware, user.getById);
app.post('/users', userMiddleware.checkUserValidityMiddleware, user.createUser);
app.post('/users/update', userMiddleware.checkUserValidityMiddleware, userMiddleware.isEditUserPresentMiddleware, user.updateUser);
app.post('/users/auth', userMiddleware.isUserInDBMiddleware, user.getUserInDB);

app.get('/houses/:houseId', houseMiddleware.isHousePresentMiddleware, house.getById);
app.post('/houses', houseMiddleware.checkHouseValidityMiddleware, house.createHouse);
app.post('/houses/update', houseMiddleware.checkHouseValidityMiddleware, houseMiddleware.isEditHousePresentMiddleware, house.updateHouse);

app.all('*', async (req, res) => {
    res.status(404).json('404. NOT FOUND! SORRY...');
})

app.listen(3000, () => {
    console.log(3000);
});

