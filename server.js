const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// sets the port of on which the server will run!
app.set("port", process.env.PORT || 5001);
// ====

// middleware;
app.use(express.static(path.join(__dirname, "public")));
//

// All get methods here

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});
app.get("/version", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "version.html"));
});
app.get("/user", (req, res) => {
    const {
        text
    } = req.body;
    // console.log(text);
    res.json("Data sent successfully!");
});

// registration and validation of user, plus login params

app.post("/login", (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (email === database.email && password === database.password) {
        res.redirect("/weather");
    } else {
        res.status(400).sendFile(path.join(__dirname, "public", "about.html"));
    }
});
app.post("/signup", (req, res) => {});

const PORT = app.get("port");
app.listen(PORT, console.log(`server started on port: ${PORT}`));