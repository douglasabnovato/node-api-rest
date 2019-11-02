const express = require('express');
const mongoose = require('mongoose');
//const requireDir = require('require-dir');//erro depois desse install 

//iniciando o app
const app = express();

//iniciando o db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

//primeira rota
app.get("/", (req, res) => {
    res.send("Hello Rocketseat");
});



/*
app.use(express.json());


requireDir('./src/models');


//rotas
app.use('/api', require('./src/routes'));*/


app.listen(3001);