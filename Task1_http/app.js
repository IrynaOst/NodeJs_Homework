const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let {pathname} = url.parse(req.url);
    switch (pathname) {
        case '/':
            fs.readFile('./index.html', (err, data) => {
                res.end(data);
            })
            break;
        case '/login':
            fs.readFile('./login.html', (err, data) => {
                res.end(data);
            })
            break;
         case '/register':
            fs.readFile('./register.html', (err, data) => {
                res.end(data);
            })
            break;
        default:
            fs.readFile('./404.html', (err, data) => {
                res.end(data);
            })
            break;

    }
});

server.listen(3000, (err) => {
    if (err) {
        console.log('ERRRRROR');
    } else {
        console.log('Listen 3000');
    }
})