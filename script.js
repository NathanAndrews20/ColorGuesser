let answer = '';
let lives = 3;
let score = 0;

window.addEventListener('load', () => {
    setLives(10);
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

        score++;
        displayScore(score);

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
            currentSquare.style.pointerEvents = 'none';
        }
    }
    else{
        feedback.innerHTML = 'Try Again';
        selectedSquare.style.opacity = '0';
        subtractLife(1);
        if(lives === 0){
            const modalBox = document.getElementById('modal-box-flex-container');
            modalBox.style.visibility = 'visible';
            modalBox.style.opacity = '1';

            document.getElementById('play-again-button').addEventListener('click', ()=>{
                modalBox.style.visibility = 'hidden';
                modalBox.style.opacity = '0';

                score = 0;
                displayScore(score);

                setLives(10);
                loadGame();
            });
        }
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
        currentSquare.style.pointerEvents = 'auto';
    }
    answer = squares[Math.floor(Math.random()*(squares.length-1))].style.backgroundColor;
    document.getElementById('answer-color').innerHTML = answer.toUpperCase();
    document.getElementById('answer-square').style.backgroundColor = answer;
}

function displayScore(score){
    document.getElementById('score-value').innerHTML = score;
}

function setLives(numLives){
    lives = numLives;
    document.getElementById('life-count').innerHTML = lives;
}

function addLife(numLives){
    lives += numLives;
    document.getElementById('life-count').innerHTML = lives;
}

function subtractLife(numLives){
    lives -= numLives;
    document.getElementById('life-count').innerHTML = lives;
}

function generateColorString(){
    const max = 255;
    const min = 0;
    return `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`
    
    function randomRGBValue(){
        return Math.floor(Math.random()*(max-min)+min);
    }
}