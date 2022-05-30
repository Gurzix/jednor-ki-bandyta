 export class Wallet {
  constructor(money) {
    let _money = money;

    this.getMoneyValue = () => _money;

    this.can_i_play = (value) => {
      if (_money >= value) return true;
      return false;
    };

    this.changeWallet = (value, type = "+") => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("Nieprawidłowy typ działania!");
        }
      } else {
        throw new Error("nieprawidłowa liczba!");
      }
    };
  }
}


