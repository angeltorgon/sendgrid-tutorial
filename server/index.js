const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey('api key');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to sendgrid tutorial backend!")
});

app.listen(5000, (req, res) => {
    console.log("now listening on port 5000");
});