const coinArray = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

buttons.forEach((butt) => butt.addEventListener('click', tossCoin));


function tossCoin (e) {
    let playerGuess = e.target.innerText;
    console.log(playerGuess);

    let computerToss = Math.floor(Math.random() * coinArray.length);

    let computerGuess = coinArray[computerToss];

    console.log('computer guessed', computerGuess);

    message.innerHTML = "Computer Selected " + computerGuess + "<br>";

    let output;
    if (playerGuess === computerGuess) {
        output = "Player Wins";
        score[0]++;
    }
    else {
        output = "Computer Wins";
        score[1]++;
    }

    message.innerHTML += output + "<br>Player " + score[0] + " Computer " + score[1];


}