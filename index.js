const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT ||5000;

app.use(cors());

const hotel = require('./data/hotel.json');

app.get('/' , (req , res) => {
    res.send('Hotel Booking Server');
});

app.get('/hotel' , (req , res) => {
    res.send(hotel);
});

app.listen(port , () => {
    console.log(`The Port is Running on port ${port}`);
})