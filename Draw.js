export class Draw {
    constructor() {
        this.moneyToDraw = ['./img/euro.png','./img/dolar.png','./img/funt.png']
        let _result = this.drawResult();
        this.getDrawResult =()=> _result
        console.log(_result)
    }

    drawResult() {
        let currency = [];
        for ( let i=0; i < this.moneyToDraw.length; i++) {
            const index= Math.floor(Math.random() * this.moneyToDraw.length);
            const photoOfMoney = this.moneyToDraw[index]
            currency.push(photoOfMoney);
        }
        return currency;
    }
}

