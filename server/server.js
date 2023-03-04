//1️⃣


const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



//ROUTES⭐️
let equation = {
    inputOne: '',
    math: '', 
    inputTwo: '',
    history: []
}

// GET
app.get('/answers',(req, res) => {
    //respond/send data
    res.send(equation);//⭐️
});
//POST ROUTE
app.post('/addEquation', (req, res) => {
    //data will be put on req.body
console.log('in POST', req.body);

//need to check if guesses

//store the equations
equation.history.push(req.body.inputOne)//🔴this might be a problem area
equation.history.push(req.body.inputTwo)

res.sendStatus(201);
});








app.listen(PORT, () => {
    console.log('server running on port', PORT )
});