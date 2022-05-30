export class Result {
  static moneyWon(result, bid) {
    if (result) {
      return 3 * bid;
    } else {
      return 0;
    }
  }

  static checkWhoWin(draw) {
    if(draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[0] !== draw[2] && draw[2] !== draw[1]) return true;
    else return false;
  }
}
