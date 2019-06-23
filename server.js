const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const database = {
    username: 'Akinola',
    email: 'makindeakinola22@gmail.com',
    password: '12345'
}

app.get('/user',(req, res) => {
    res.send(database);
})
// middleware;
app.use(express.static(path.join(__dirname, 'public')));
//

app.get('/news', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','news.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signin.html'));
});
app.get('/weather', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'weather.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/version', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'version.html'));
});

// registration and validation of user, plus login params

app.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (email === database.email && password === database.password) {
        res.redirect('/weather')
    } else {
        res.status(400).sendFile(path.join(__dirname, 'public', 'about.html'))
    }
})
app.post('/signup', (req, res) => {})
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started on port: ${PORT}`));