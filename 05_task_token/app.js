const express = require('express');
const expHbr =require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();

const db = require('./dataBase').getInstance();
db.setModels();
global.appRoot = __dirname;

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbr({
    extname: '.hbs',
    defaultLayout: null,
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const {render} = require('./controllers');
const {userRouter, houseRouter, authRouter} = require('./router');

app.get('/', render.main);
app.get('/profile', render.profileUser);
app.get('/houseProfile', render.profileHouse);

app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);

app.all('*', async (req, res) => {
    res.status(404).json('404. NOT FOUND! SORRY...');
})

app.listen(3000, () => {
    console.log(3000);
});

