$(document).ready(handleReady);

function handleReady(){
    console.log('jQuery is loaded!')
    $("#equalsBtn").on('click', calculateEquation);
    getEquation();
}


function calculateEquation(){
    //get values from input and math variable
    let mathEquation = {
        inputOne: $('#firstNumberInput').val(),
        // math: $('.mathBtn').val(),🟢Not sure if this is needed yet
        inputTwo: $('#SecondNumberInput').val()
    }
    console.log('mathEquation', mathEquation);
    $.ajax({
        method: 'POST',
        url: '/addEquation',
        data: mathEquation, //this must be an object
    })
    .then((response) => {
        console.log('post finished')
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