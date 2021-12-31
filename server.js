const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios'); 

app.use(cors());

app.get('/', async (req, res) => {

    try{
        //response é a resposta do axios mas eu tiro o data de dentro do response que vai me dar o que quero  
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        return res.json(data);

    }catch(error){
        console.error(error);
    }
});

app.listen('4567'); 