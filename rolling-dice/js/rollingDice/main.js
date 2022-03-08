console.log("Let's roll some dice, baby!");
console.log("---------------------------");

const roll = () => {
    const dieValue = Math.floor(Math.random() * 6 + 1);
    const die = new eachDie(dieValue);
    return die;
}

class eachDie {
    constructor(value) {
      this.value = value;
    }
  }

eachDie.prototype.toString = function dieString() {
    

let dieString = "Unknown";

    switch (this.value)
    {
            case 1:
                dieString = "one"; 
                break;
            case 2:
                dieString = "two";
                break;
            case 3:
                dieString = "three";
                break;
            case 4:
                dieString = "four";
                break;
            case 5:
                dieString = "five";
                break;
            case 6:
                dieString = "six";
                break;
        }

        return dieString;
    }

for (let i = 0; i < 10; i++)
    {
    const die1 = roll()
    const die2 = roll()
    
    let message = `${die1} + ${die2} == ${die1.value + die2.value}`
    if (die1.value === die2.value)
    {
        message += " DOUBLES!";
    }
    
    console.log(message)
    }