
// function play() {
//     //     step-1: hide the home screen . to hide the screen add the class didden to the home scren
//     const homesection = document.getElementById('home-scren');
//     homesection.classList.add('hidden')
// jibon tai bedona

//     // console.log(homesection.classList)
//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }


function handleKeyButtonPress(event) {
    const playerPressed = event.key;
    console.log('player press', playerPressed);

    if (playerPressed === 'Escape') {
        gameOver();
    }


    // get the expeted to the press
    const currentAlphabateElement = document.getElementById('current-alphabate');
    const currentAlphabate = currentAlphabateElement.innerText;
    const expetedAlphabate = currentAlphabate.toLowerCase()
    // console.log(playerPressed, expetedAlphabate);


    // check mach the alphabate
    if (playerPressed === expetedAlphabate) {
        console.log('You gat a point');


        const currentScore = getTextGetElementVlaueId('current-score')
        const updatescore = currentScore + 1;
        setTextGetElementVlaueId('current-score', updatescore);




        //---------------------------------------------------

        /*  // update score
         // 1. get the current score
         const currentScoreElement = document.getElementById('current-score')
         const currentScoreText = currentScoreElement.innerText;
         const currentScore = parseInt(currentScoreText);
         console.log(currentScore);
         
         // 2. increase the score by 1
         const newScore = currentScore + 1;
 
         // show the update score
         currentScoreElement.innerText = newScore; */
        //------------------------------------------------------
        removeBackGroundColor(expetedAlphabate);
        continueGame();
    }
    else {
        console.log('you mised .  loss a life')

        const currentLife = getTextGetElementVlaueId('current-life');
        const updateLife = currentLife - 1;
        setTextGetElementVlaueId('current-life', updateLife);

        if (updateLife === 0) {
            gameOver();
            console.log('game over');
        }



        //---------------------------------------------

        /*  // step-1: get the life count
         const currentLifeElement = document.getElementById('current-life')
         const currentLifeText = currentLifeElement.innerText;
         const currentLife = parseInt(currentLifeText);
 
         // step-2: display the upload life count
         const newLife = currentLife - 1;
 
         // step-3 : display the life count
         currentLifeElement.innerText =newLife; */
    }
}


// capture keyboard press
document.addEventListener('keyup', handleKeyButtonPress);






function continueGame() {
    // step1: generate a random number 
    const alphabate = getRandomAlphabate();
    // console.log('your random alphabate', alphabate)

    // set randomly generate alphabate to the scren ( show it)
    const currentAlphabateElement = document.getElementById('current-alphabate');
    currentAlphabateElement.innerText = alphabate;

    // set background coler
    setBackGroundColer(alphabate);

}

function play() {
    // hidde eveery thing show only the play ground
    hideElemnetId('home-scren');
    hideElemnetId('final-score')
    addElement('play-ground');

    // reset the score and life
    setTextGetElementVlaueId('current-life', 5)
    setTextGetElementVlaueId('current-score', 0)

    continueGame();
}


function gameOver() {
    hideElemnetId('play-ground');
    addElement('final-score');

    // update final score
    // 1. get the final score
    const lastscore = getTextGetElementVlaueId('current-score');
    setTextGetElementVlaueId('last-score', lastscore);

    // clear the last selected alphabate highlight
    const currentAlphabatee = getTextElementId('current-alphabate')
    console.log(currentAlphabatee)
    removeBackGroundColor(currentAlphabatee);




}
function getRandomAlphabate() {
    // get ir creat 
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabates = alphabateString.split('');
    // console.log(alphabates)
    // get index between 0-25

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabate = alphabates[index];
    // console.log(index, alphabate);
    return alphabate;
}