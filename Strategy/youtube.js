console.log("Strategy design pattern")

function Fedex() {
    this.calculate = package => {
        return 4.5;
    }
}

function UPS() {
    this.calculate = package => {
        return 5.5;
    }
}

function UPSA() {
    this.calculate = package => {
        return 6.5;
    }
}

const fedex = new Fedex();
const ups = new UPS();
const upsa = new UPSA();
const package = { from: "Noida", to: "delhi", weight: 1.68 };

//==========>>>> Simple way
// console.log("fedex :" + fedex.calculate(package))
// console.log("ups :" + ups.calculate(package))
// console.log("upsa :" + upsa.calculate(package))



//====>>>> Strategy Patter
function Shipping() {
    this.company = "";
    this.setStrategy = (company) => {
        this.company = company;
    }

    this.calculate = package => {
        return this.company.calculate(package)
    }
}

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("Fedex : " + shipping.calculate(package))

shipping.setStrategy(ups);
console.log("ups : " + shipping.calculate(package))

shipping.setStrategy(upsa);
console.log("UPSA : " + shipping.calculate(package))