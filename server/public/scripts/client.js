// STUFF TO DO ON CLIENT SIDE

//1️⃣ Gotta add click listeners for all the buttons
//1️⃣.5️⃣ need functions for each click listener

//2️⃣ need a render function to add the history of equations

//3️⃣

//4️⃣

//5️⃣

//6️⃣





$(document).ready(handleReady);

function handleReady(){
    console.log('jQuery is loaded!')
    $("#equalsBtn").on('click', calculateEquation);// = button
    $("#additionBtn").on('click', addition );// + button
    $("#subtractionBtn").on('click', subtraction );// - button
    $("#multiplyBtn").on('click', multiplication);// * button
    $("#divisionBtn").on('click',division );// / button
    $("#clearBtn").on('click', clearInputs);// clear fields button
    getEquation();
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

function calculateEquation(){
    //get values from input and math variable
    let mathEquation = {
        inputOne: $('#firstNumberInput').val(),
        // math: $('.mathBtn').val(),🟢Not sure if this is needed yet
        inputTwo: $('#SecondNumberInput').val()
    }
    console.log('mathEquation', mathEquation);
    //ajax adds data to server
    $.ajax({
        method: 'POST',
        url: '/addEquation',
        data: mathEquation, //this must be an object
    })
    .then((response) => {
        console.log('post finished');
        //calling this function updates our data
        getEquation();
    })

}



function getEquation(){
    $.ajax({
        url: '/answers',
        method: 'GET'
    })
    .then((response) => {
        console.log('answers data:', response);//⭐️
    })
}