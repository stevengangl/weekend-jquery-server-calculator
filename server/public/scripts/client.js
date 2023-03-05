$(document).ready(handleReady);

function handleReady(){
    console.log('jQuery is loaded!')

    $("#additionBtn").on('click', addition );// + button
    $("#subtractionBtn").on('click', subtraction );// - button
    $("#multiplyBtn").on('click', multiplication);// * button
    $("#divisionBtn").on('click',division );// / button
    $("#clearBtn").on('click', clearInputs);// clear fields button
    $('#equalsBtn').on('click', equalsSign)
    getInputInfo();
}

let inputsForm = {
    firstInput: '',
    secondInput:'', //This is grabbing the value from the input forms
    mathSymbol:''
}

function getInputInfo(){//THIS IS A GET REQUEST
    $.ajax({
        url: '/inputs',
        method: 'GET'
    })
    .then((response) => {//⭐️⭐️equation variable is now response
        console.log('data from the equation variable', response)//⭐️⭐️
        render(response)
    })
}

function render(object){
    $('#historyOfEquations').empty()
    console.log('this is the object:',object.history)
    for(let i = 0; i < object.history.length; i ++){

        console.log('object.history at index i:',object.history[i].results);
        
        $('#historyOfEquations').append(`
        <li>
        ${object.history[i].firstInput}
        ${object.history[i].mathSymbol}
        ${object.history[i].secondInput}
        </li>
        `)
    }
    // $('#answersArea').append(`
    // <li>
    // ${object.history[object.history.length-1].results}
    // </li>
    // `)
    }

function clearInputs(){

    $('#firstNumberInput').val('')
    $('#secondNumberInput').val('')

    console.log('in clearInputs()')
}

function division(){
    inputsForm.mathSymbol = '/';
    console.log('in addition()');
    inputsForm.firstInput = $('#firstNumberInput').val();
    inputsForm.secondInput = $('#secondNumberInput').val();
    console.log('in division()')
}

function multiplication(){
    inputsForm.mathSymbol = '*';
    console.log('in addition()');
    inputsForm.firstInput = $('#firstNumberInput').val();
    inputsForm.secondInput = $('#secondNumberInput').val();
    console.log('in multiplication()')
}

function subtraction(){
    inputsForm.mathSymbol = '-';
    console.log('in addition()');
    inputsForm.firstInput = $('#firstNumberInput').val();
    inputsForm.secondInput = $('#secondNumberInput').val();
    console.log('in subtraction()')
}

function addition(){
    inputsForm.mathSymbol = '+';
    console.log('in addition()');
    inputsForm.firstInput = $('#firstNumberInput').val();
    inputsForm.secondInput = $('#secondNumberInput').val();
}

function equalsSign(){
    //this functions job is to get values from the inputs
console.log('inputs from client:',inputsForm)// this variable holds the client info from the dom
    //ajaz to server
    $.ajax({
        method: 'POST',
        url: '/addEquation',
        data: inputsForm, //data must be an object
    })
    .then((response) => {//⭐️equation object
        console.log('post finished:',response);
        getInputInfo();
    })
}