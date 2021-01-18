let answer = '';

document.getElementById('new-colors-button').addEventListener('click', event => {
    document.getElementById('feedback').innerHTML = '';
    const squares = document.getElementById('squares-container').children;
    for(let i = 0; i<squares.length; i++){
        let currentSquare = squares[i];
        currentSquare.style.visibility = 'visible';
        currentSquare.style.backgroundColor = generateColorString();
    }
    answer = squares[Math.floor(Math.random()*(squares.length-1))].style.backgroundColor;
    document.getElementById('answer-color').innerHTML = answer.toUpperCase();
});

document.getElementById('squares-container').addEventListener('click', event => {
    if(event.target.id === 'squares-container') { return; }
    const square = event.target;
    const feedback = document.getElementById('feedback');
    feedback.style.visibility = 'visible';
    if(square.style.backgroundColor === answer){
        feedback.innerHTML = 'CORRECT';
    }
    else{
        feedback.innerHTML = 'TRY AGAIN';
        square.style.visibility = 'hidden';
    }
});

function generateColorString(){
    const max = 255;
    const min = 0;
    return `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`
    
    function randomRGBValue(){
        return Math.floor(Math.random()*(max-min)+min);
    }
}