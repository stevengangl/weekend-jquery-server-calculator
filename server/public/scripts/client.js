
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




function equalsSign(){
    //this functions job is to get values from the inputs
let inputsForm = {
    input1: $('#firstNumberInput').val(),
    input2: $('#secondNumberInput').val(), //This is grabbing the value from the input forms
    // mathSign: $('.mathBtn').val()🔴🔵this isnt giving me a value so ima comment it out for now
}

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
    console.log('this is the object:',object.history)
    for(let i = 0; i < object.history.length; i ++){
        console.log('object.history at index i:',object.history[i].firstInput);
        $('#historyOfEquations').append(`
        <li>
        ${object.history[i].firstInput}
        ${object.history[i].mathSymbol}
        ${object.history[i].secondInput}


        </li>
        `)
    }

    }

function clearInputs(){

    console.log('in clearInputs()')
}

function division(){

    console.log('in division()')
}

function multiplication(){

    console.log('in multiplication()')
}

function subtraction(){

    console.log('in subtraction()')
}

function addition(){

    console.log('in addition()')
}


