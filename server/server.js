// const { response } = require("express");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//make a function to do the math 
//The function(s?) should be able to handle Addition, Subtraction, Multiplication, and Division. 


let inputData = {

    history: [
    //     {
    //     inputOne: '1',
    //     inputTwo: '2',
    //     mathSymbol: '-',
    //     actualCalculation: ''
    // },
    // {
    //     inputOne: '4',
    //     inputTwo: '6',
    //     mathSymbol: '+',
    //     actualCalculation: ''
    // }
]
};

app.get('/channelTwo', (req, res) => {
    res.send(inputData)
})

app.post('/channelOne', (req, res) => {
    console.log('in POST showing req.body which is actually inputData', req.body)
    //call math function in here
    doMath(req.body)
    res.sendStatus(201);
})


function doMath(object) {
    inputData.history.unshift(object);
    let firstNumber = Number(object.inputOne)
    let secondNumber = Number(object.inputTwo)
    let result;
    switch (object.mathSymbol) {
        case '+':
            result = firstNumber + secondNumber;
            break;

        case '-':
            result = firstNumber - secondNumber;
            break;

        case '*':
            result = firstNumber * secondNumber;
            break;

        case '/':
            result = firstNumber / secondNumber;
            break;
            return;

    }

    //math calculations would happen here
    //well get a answer from the math and thats wht well send into the global object
    actualCalculation = result


    inputData.history[0].actualCalculation = actualCalculation
}




app.listen(PORT, () => {
    console.log('server running on port', PORT)
});
