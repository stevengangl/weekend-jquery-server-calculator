const { response } = require("express");


const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;

const history = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/inputs',(req, res) => {
    //this is how we send data
    res.send(equation);//⭐️sending the equation variable over to the client side GET
});

//Global variable
//this is the data were storing on the server
//app.get sends back the stored info to client side
let equation = {
    history:[{
        firstInput: '5',
        secondInput: '6',
        mathSymbol: '+',
        results: '6'
    }]
}

//POST ROUTE
app.post('/addEquation', (req, res) => {
        //data will be put on req.body
    console.log('in post', req.body);

    const { firstInput, secondInput, mathSymbol } = req.body;

    const num1 = Number(firstInput);
    const num2 = Number(secondInput);

    let result;
switch (mathSymbol) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    result = NaN;
    break;
}

     //need to store the equations
    //  equation.history.push(req.body)//this stores the history of input 1
    history.push({
        firstInput: num1,
        secondInput: num2,
        mathSymbol,
        result
      });

    res.sendStatus(201);
})





app.listen(PORT, () => {
    console.log('server running on port', PORT )
});





let result;
switch (mathSymbol) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    result = NaN;
    break;
}
