const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/discography', (req, res) => {
    res.sendFile(__dirname + '/views/discography.html');
});


app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
});

app.use((req, res) => {
    res.status(404).send("Mi no entender");
  });

app.listen(3000)