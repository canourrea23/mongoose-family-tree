const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false }));

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');

const db = mongoose.connection;

const User = require('./models/user');

db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

db.on('error', () => {
    console.error(`Databade error: ${err}`);
});

app.get('/', (req, res) => {
    res.send('Mongoose');
});

app.get('/user', (req, res) => {
    User.create({
        name: 'Rome Bell',
        email: 'rome.bell@ga.co',
        age: 33,
        website: 'https://github.com/romebell',
    })
})

const PORT = process.env.Port || 3000;
app.listen(PORT, () => {
    console.log(`Sever is listening on PORT: ${PORT} 🎧`);
});
