export class Statistics {
  constructor() {
    this.gameStatistics = [];
  }

 addGameToStatistics(win, bid) {
     let gameResult = {
         win: win,
         bid:bid
     }
     this.gameStatistics.push(gameResult);
     
 }

 showStatistics() {
   let games = this.gameStatistics.length;
   let wins = this.gameStatistics.filter(x => x.win).length;
   let losts = games - wins;
   return [games, wins, losts]
 }
}


