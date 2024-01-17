let ccounter = 0;
let pcounter = 0;

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#rock-button').addEventListener('click', () => game('rock'))

    document.querySelector('#paper-button').addEventListener('click', () => game('paper'))

    document.querySelector('#scissors-button').addEventListener('click', () => game('scissors'))
    
    function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors'];
        let pick = Math.floor(Math.random()*choices.length);
    
        return choices[pick];
    }
    
    function decider(p, c) {
        if (p != 'rock' && p != 'paper' && p != 'scissors') {
            return console.log('Please choose between "rock", "paper" and "scissors".')
        } else if (p === c) {
            document.querySelector('#computer-name').style.color = '#009bd6';
            document.querySelector('#player-name').style.color = '#009bd6';
            return;
        } else if (p === 'rock' && c === 'paper' || p === 'paper' && c === 'scissors' || p === 'scissors' && c === 'rock') {
            ccounter++;
            document.querySelector('#computer-score').innerHTML = ccounter;
            document.querySelector('#computer-name').style.color = '#33AB5F';
            document.querySelector('#player-name').style.color = '#ff3333';
            if (ccounter == 3) {
                win('com');
            }
            return;
        } else {
            pcounter++;
            document.querySelector('#player-score').innerHTML = pcounter;
            document.querySelector('#computer-name').style.color = '#ff3333';
            document.querySelector('#player-name').style.color = '#33AB5F';
            if (pcounter == 3) {
                win('pl');
            }
            return;
        }
    }
    
    function game(player) {

        let c = getComputerChoice();
        document.querySelector('#player-choice').innerHTML = player;
        document.querySelector('#computer-choice').innerHTML = c;
        decider(player, c);
        
    }

    function reset() {
        document.querySelector('#darken').style.display = 'none';
        document.querySelector('#winner-page').style.display = 'none';
        ccounter = 0;
        pcounter = 0;
        document.querySelector('#player-score').innerHTML = '-';
        document.querySelector('#computer-score').innerHTML = '-';
        document.querySelector('#player-choice').innerHTML = '...';
        document.querySelector('#computer-choice').innerHTML = '...';
    }

    function win(winner) {
        if (winner == 'pl') {
            document.querySelector('#darken').style.display = 'block';
            document.querySelector('#winner-page').style.display = 'flex';
            document.querySelector('#winner').innerHTML = 'You win!';
            document.querySelector('#play-again').addEventListener('click', () => reset());
            document.querySelector('#computer-name').style.color = '#F9FAF8';
            document.querySelector('#player-name').style.color = '#F9FAF8';
        } else {
            document.querySelector('#darken').style.display = 'block';
            document.querySelector('#winner-page').style.display = 'flex';
            document.querySelector('#winner').innerHTML = 'You lose!';
            document.querySelector('#play-again').addEventListener('click', () => reset());
            document.querySelector('#computer-name').style.color = '#F9FAF8';
            document.querySelector('#player-name').style.color = '#F9FAF8';
        }
    }
})

