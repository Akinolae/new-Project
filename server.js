const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signin.html'));
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
        res.sendFile(path.join(__dirname, 'public', 'weather.html'))
    } else {
        res.status(400).sendFile(path.join(__dirname, 'public', 'about.html'))
    }
})
app.post('/signup', (req, res) => {})
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started on port: ${PORT}`));