const { response } = require("express");


const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



//ROUTES⭐️
let equation = {
    history:[{
        firstInput: '5',
        secondInput: '6',
        mathSymbol: '+'
    }]
  

}

app.get('/inputs',(req, res) => {
    //this is how we send data
    res.send(equation);//⭐️sending the equation variable over to the client side GET
});



//POST ROUTE
app.post('/addEquation', (req, res) => {
        //data will be put on req.body
    console.log('in post', req.body);


     //need to store the equations
     equation.history.push(req.body)//this stores the history of input 1


    res.sendStatus(201);
})





app.listen(PORT, () => {
    console.log('server running on port', PORT )
});