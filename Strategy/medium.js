console.log("Strategy Mattern from medium")

class StrategyManger {
    constructor() {
        this._strategy = [];
    }

    addStrategy(strategy) {
        this._strategy = [...this._strategy, strategy]
    }

    getStrategy(name) {
        return this._strategy.find(strategy => strategy.name === name)
    }
}

class Strategy {
    constructor(name, handler) {
        this._name = name;
        this._handler = handler
    }

    doAction() {
        this._handler;
    }
}

const strategyManger = new StrategyManger();
const strategy1 = new Strategy('strategy1',() => console.log('Strategy1'));
const strategy2 = new Strategy('strategy2',() => console.log('Strategy2'));

strategyManger.addStrategy(strategy1);
strategyManger.addStrategy(strategy2);

// chose first Strategy
const strategyA = strategyManger.getStrategy('strategy1');
console.log(strategy1.doAction())

// chose Secong Strategy
const strategyB = strategyManger.getStrategy('strategy2');
strategyB.doAction();

//Choose unsupported strategy
const strategyC = strategyManger.getStrategy('strategy3')
try{
    strategyC.doAction()
}catch(err){
    console.log("Caugth erro");
    console.log(err)
}