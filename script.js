let answer = '';

window.addEventListener('load', () => {
    loadGame();
});

document.getElementById('new-colors-button').addEventListener('click', () => {
    loadGame();
});

document.getElementById('squares-container').addEventListener('click', event => {
    if(event.target.id === 'squares-container') { return; }
    const selectedSquare = event.target;
    const feedback = document.getElementById('feedback');
    feedback.style.visibility = 'visible';
    if(selectedSquare.style.backgroundColor === answer){
        const headerContainer = document.getElementById('header-container');
        headerContainer.style.transitionProperty = 'background-color';
        headerContainer.style.transitionDuration = '500ms';
        headerContainer.style.backgroundColor = answer;

        feedback.innerHTML = 'Correct';
        const squares = document.getElementById('squares-container').children;
        for(let i = 0; i<squares.length; i++){
            const currentSquare = squares[i];
            currentSquare.style.backgroundColor = answer;
            currentSquare.style.transitionProperty = 'opacity, background-color';
            currentSquare.style.transitionDuration = '500ms';
            currentSquare.style.opacity = '1';  
        }
    }
    else{
        feedback.innerHTML = 'Try Again';
        selectedSquare.style.opacity = '0';
    }
});

function loadGame(){
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('header-container').style.backgroundColor = 'teal';
    document.getElementById('header-container').style.transition = '';

    const squares = document.getElementById('squares-container').children;
    for(let i = 0; i<squares.length; i++){
        const currentSquare = squares[i];
        currentSquare.style.transition = '';
        currentSquare.style.opacity = '1';
        currentSquare.style.backgroundColor = generateColorString();
    }
    answer = squares[Math.floor(Math.random()*(squares.length-1))].style.backgroundColor;
    document.getElementById('answer-color').innerHTML = answer.toUpperCase();
}

function generateColorString(){
    const max = 255;
    const min = 0;
    return `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`
    
    function randomRGBValue(){
        return Math.floor(Math.random()*(max-min)+min);
    }
}