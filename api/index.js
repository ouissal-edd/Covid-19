require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const covid =require('./router/userRouter')
const cors = require('cors')


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT']
}));

// set up server
app.listen(process.env.APP_PORT, () => console.log(`started on port ', ${process.env.APP_PORT}`));

app.use(express.json())


// connect mongoose
mongoose.connect(process.env.MDB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) return console.error(err)
        console.log('connected to mongoose')
    });

    app.use('/covid-data', covid )

