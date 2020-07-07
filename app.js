
var roundSocre,scores,activePlayer,dice,gamePlaying=true,lastDice,winningTotal;
init();
winningTotal = document.querySelector('.final-score').value;

function btnroll() {
    //console.log(winningTotal)
    if(gamePlaying){    
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png'
    //scoreArray.push(dice)
    if(lastDice ==6 && dice==6){
        scores[activePlayer] = 0;
        document.getElementById('score-'+activePlayer).textContent = '0';
        nextplayer();
    }    
    else if (dice !== 1) {

        roundSocre += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundSocre;
        console.log(activePlayer)
    }
    else {
            nextplayer();
           
        }
    var lastDice = dice;        
    }
}
function btnhold() {
    //console.log(winningTotal)
    if(gamePlaying){
    scores[activePlayer]  += roundSocre;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer]>=winningTotal){
        document.getElementById('name-' + activePlayer).textContent = 'Winner!!!!!'
        document.querySelector('.dice').style.display = 'none'; 
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;     
        
        }
    else {
        nextplayer();
        }    
    //nextplayer();
    }

}
function nextplayer(){
    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    roundSocre = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('.dice').style.display = 'none';
}
function init(){
    scores = [0,0];
    roundSocre = 0;
    activePlayer = 0;
    document.querySelector('.final-score').value=" ";
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player 2';  
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active'); 
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true
}

document.querySelector('.btn-roll').addEventListener('click',btnroll);
document.querySelector('.btn-hold').addEventListener('click',btnhold);
document.querySelector('.btn-new').addEventListener('click', init);

