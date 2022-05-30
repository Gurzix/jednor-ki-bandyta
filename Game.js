import { Statistics } from "./Statistics.js";
import { Wallet } from "./Wallet.js";
import { Draw } from "./Draw.js";
import { Result } from "./Result.js";

export default class Game {
    constructor(moneyForStart) {
     this.stats = new Statistics();
     this.wallet = new Wallet(moneyForStart);
     document.getElementById('start').addEventListener('click', this.startGame.bind(this));
     this.bidPlaced = document.querySelector('span.bid');
     this.spanWallet = document.querySelector('span.wallet');
     this.boards = document.querySelectorAll('.color');
     this.input = document.getElementById('input');
     this.decision = document.querySelector('.decision');
     this.gamesPlayed = document.querySelector('.games');
     this.gamesPlayerWon = document.querySelector('.gamesWon');
     this.gamesPlayerLost = document.querySelector('.gamesLost');
     this.winOrGoHome = document.querySelector('.startAgain');
     this.render();
    }

    render(currency = [], result="", bid, moneyWon, moneyLeft = this.wallet.getMoneyValue(), stats=[0,0,0]) {
    this.boards.forEach((board, index) => {
        board.style.backgroundImage= `url(${currency[index]})`
    } )

    if(result) {
      result = `Wygrałeś ${moneyWon}$.`
    } else if(!result && result !== "") {
       result =  `Przegrałeś ${bid} $`;
    }    
    
    this.decision.textContent = result;
    this.spanWallet.textContent = moneyLeft;
    this.gamesPlayed.textContent = stats[0];
    this.gamesPlayerWon.textContent = stats[1];
    this.gamesPlayerLost.textContent = stats[2];
    if(moneyLeft == 0) {
        this.winOrGoHome.textContent = 'jesteś bankrutem! spróbuj jeszcze raz!';
    }
    }

    startGame() {

     if(this.input.value < 1)  {
         alert('Masz za mało środków żeby zagrać');
    
    }

     const bid = Math.floor(this.input.value);

     if(!this.wallet.can_i_play(bid)) {
         
         return alert("Masz za mało środków lub podałeś niewłaściwą wartość!")
     }

     this.wallet.changeWallet(bid, '-');

     this.draw = new Draw();

     const currency = this.draw.getDrawResult();
     const result = Result.checkWhoWin(currency);
     const moneyWon = Result.moneyWon(result, bid);
     this.wallet.changeWallet(moneyWon);
     this.stats.addGameToStatistics(result, bid);
     this.render(currency, result, bid, moneyWon,this.wallet.getMoneyValue(), this.stats.showStatistics());
     this.input.value='';
    }
}

