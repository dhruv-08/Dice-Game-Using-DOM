var scores, roundScores, activePlayer, gamePlayer = true;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
var p1 = prompt('Player 1 name ?');
var p2 = prompt('Player 2 name ?');
while (p1 == p2) {
    alert('Both cannot have same name');
    p2 = prompt('Player 2 name ?');
}
document.querySelector('#name-0').textContent = p1;
document.querySelector('#name-1').textContent = p2;

document.querySelector('.dice').style.display = "none";
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;


function btn() {
    if (gamePlayer) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        if (dice != 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else if (activePlayer == 0 && dice == 1) {
            activePlayer = 1;
            roundScore = 0;
            document.querySelector('#current-0').textContent = 0;
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.dice').style.display = "none";
        } else if (activePlayer == 1 && dice == 1) {
            activePlayer = 0;
            roundScore = 0;
            document.querySelector('#current-1').textContent = 0;
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('.dice').style.display = "none";
        }
    }
}
document.querySelector('.btn-roll').addEventListener('click', btn);

function hold() {
    if (activePlayer == 0) {
        scores[0] += roundScore
        document.querySelector('#score-0').textContent = scores[0];
        activePlayer = 1;
        roundScore = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.dice').style.display = "none";
    } else {
        scores[1] += roundScore;
        document.querySelector('#score-1').textContent = scores[1];
        activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.dice').style.display = "none";
    }
    if (scores[0] >= 100) {
        document.querySelector('.player-0-panel').classList.add('winner');
        document.querySelector('#name-0').textContent = 'WINNER!';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        gamePlayer = false;
    } else if (scores[1] >= 100) {
        document.querySelector('.player-1-panel').classList.add('winner');
        document.querySelector('#name-1').textContent = 'WINNER!';
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.remove('active');
        gamePlayer = false;
    }

}
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', news);

function news() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    var p1 = prompt('Player 1 name ?');
    var p2 = prompt('Player 2 name ?');
    while (p1 == p2) {
        alert('Both cannot have same name');
        p2 = prompt('Player 2 name ?');
    }
    document.querySelector('#name-0').textContent = p1;
    document.querySelector('#name-1').textContent = p2;



    document.querySelector('.dice').style.display = "none";
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}