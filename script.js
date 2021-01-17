let answer = '';

document.getElementById('new-colors-button').addEventListener('click', event => {
    document.getElementById('response').innerHTML = '';
    const squares = document.getElementById('squares-container').children;
    for(let i = 0; i<squares.length; i++){
        let currentSquare = squares[i];
        currentSquare.style.backgroundColor = generateColorString();
    }
    answer = squares[Math.floor(Math.random()*(squares.length-1))].style.backgroundColor;
    document.getElementById('answer-color').innerHTML = answer;
});

document.getElementById('squares-container').addEventListener('click', event => {
    if(event.target.id === 'squares-container') { return; }
    const square = event.target;
    const response = document.getElementById('response');
    if(square.style.backgroundColor === answer){
        response.innerHTML = 'CORRECT';
    }
    else{
        response.innerHTML = 'INCORRECT'
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