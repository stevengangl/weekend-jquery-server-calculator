 



let inputData = {
    inputOne: '',
    inputTwo: '',
    mathSymbol: ''
};// were making a global object so we have a place to store the input data
//             its an object because you can only send objects in the app.get
//
$(document).ready(onReady);
console.log('jquery is working');

function onReady() {
    $("#plusBtn").on('click', addition)
    $("#subtractionBtn").on('click', subtraction)
    $("#multiplicationBtn").on('click', multiplication)
    $("#divisionBtn").on('click', division)
    $("#equalsBtn").on('click', equals)
    $("#clearBtn").on('click', clearInputs)

    getServerSideInfo()
};

function render(object) {
    $('#historyField').empty()
    $('#answerField').empty()
    $('#answerField').append(`
<li>
${object.history[0].actualCalculation}
</li>
`);

    for (let i = 0; i < object.history.length; i++) {
        $('#historyField').append(`
    <li>
    ${object.history[i].inputOne}
    ${object.history[i].mathSymbol}
    ${object.history[i].inputTwo}
    = 
    ${object.history[i].actualCalculation}
    </li>
    `)
    }

};


function getServerSideInfo() {//THIS DOES A GET REQUEST
    $.ajax({
        method: 'GET',
        url: '/channelTwo'
    })
        .then((response) => {
            console.log('GET request worked', response)//response = input data object froms erver side
            render(response);
        })
}

function equals() {//this does a POST REQUEST
    inputData.inputTwo = ($('#inputTwo').val())
    console.log('in equals()');

    $.ajax({
        method: 'POST',
        url: '/channelOne',
        data: inputData//this turns into ⭐️req.body⭐️ when its sent to the server side POST
    })
        .then((response) => {
            console.log('post worked', response)
            getServerSideInfo()
        })
}

function division() {
    inputData.inputOne = ($('#inputOne').val())
    inputData.mathSymbol = '/'
    console.log('in division');
}

function multiplication() {
    inputData.inputOne = ($('#inputOne').val())
    inputData.mathSymbol = '*'
    console.log('in multiplication()');
}

function subtraction() {
    inputData.inputOne = ($('#inputOne').val())
    inputData.mathSymbol = '-'
    console.log('in subtraction()');
}

function addition() {
    inputData.inputOne = ($('#inputOne').val())
    inputData.mathSymbol = '+'
    console.log('in addition()')
};

function clearInputs() {
    console.log('in clearInputs()');
    $('#inputOne').val('')
    $('#inputTwo').val('')
}