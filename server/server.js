


const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.static('server/public'));




//ROUTES⭐️
let equation = {
    inputOne: '',
    math: '',
    inputTwo: ''
}

// GET
app.get('/answers',(req, res) => {
    //respond/send data
    res.send(equation);//⭐️
});

app.post('/addEquation', (req, res) => {
console.log('in POST');

res.sendStatus(201);
});



app.listen(PORT, () => {
    console.log('server running on port', PORT )
});