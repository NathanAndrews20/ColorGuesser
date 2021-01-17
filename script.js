document.getElementById('new-colors-button').addEventListener('click', event => {
    const squares = document.getElementById('squares-container').children;
    for(let i = 0; i<squares.length; i++){
        let currentSquare = squares[i];
        currentSquare.style.backgroundColor = generateColorString();
    }
    let answer = squares[Math.floor(Math.random()*(squares.length-1))].style.backgroundColor;
    document.getElementById('answer-color').innerHTML = answer;
});

function generateColorString(){
    const max = 255;
    const min = 0;
    return `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`
    
    function randomRGBValue(){
        return Math.floor(Math.random()*(max-min)+min);
    }
}