const express = require('express');
const expHbr =require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

const users = [];
const houses = [];

app.engine('.hbs', expHbr({
    extname: '.hbs',
    defaultLayout: null,
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
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

app.post('/register', (req, res) => {
   const body = req.body;
   const userId = users.length + 1;
   body["userId"] = userId;
   users.push(body);
   console.log(body);
   res.redirect(`/users/${userId}`);
});

app.post('/login', (req, res) => {   
    const {password, email} = req.body;
    const userFromArr = users.find (user => password === user.password && email === user.email); 
    
    userFromArr 
        ? res.redirect(`/users/${userFromArr.userId}`) 
        : res.status(404).json('Such user not found. Please register');
});

app.get('/users/:userId', (req, res) => {
    const userId = +req.params.userId;
    const userFromArr = users.find (user => userId === user.userId); 
    
    userFromArr ? res.render('profile', userFromArr) : res.status(404).json('Such user not found');
});

app.post('/house', (req, res) => {
    const body = req.body;
    const houseId = houses.length + 1;
    body["houseId"] = houseId;
    houses.push(body);
    console.log(body);
    res.redirect(`/houses/${houseId}`);
});

app.get('/houses/:houseId', (req, res) => {
    const houseId = +req.params.houseId;
    const houseFromArr = houses.find (house => houseId === house.houseId); 
    
    houseFromArr ? res.render('houseProfile', houseFromArr) : res.status(404).json('Such house not found');
});

app.all('*', (req, res) => {
    res.status(404).json('404. NOT FOUND! SORRY...');
})


app.listen(3000, () => {
    console.log(3000);
});

