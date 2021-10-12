const express = require('express');

const mongoose = require("mongoose");
const cors = require('cors')

const path = require('path');

const usersRoutes = require('./routes/user.js');


const app = express();
// const __dirname = path.resolve(path.dirname('')); 

app.use(express.json({ limit:"30mb",extended:true}));
app.use(express.urlencoded({ limit:"30mb",extended:true}));
app.use(express.static(path.join(__dirname, 'public')));



app.use(cors({origin:true,credentials:true}));
app.use('/',usersRoutes)


const CONNECTION_URL = 'mongodb+srv://amal:amal*123@cluster0.abtle.mongodb.net/newTest?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3001; 

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT,() => console.log(`server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));

    