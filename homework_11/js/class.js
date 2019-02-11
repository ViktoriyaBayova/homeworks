// Prototype. Class
//Task 1
class Component {
    constructor (tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('span');

//Task 2
class Component {
    constructor (tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }

    setText(text) {
        this.node.textContent = text;
    }
}

// Task 3
class Calc {
    constructor (number = 0) {
        if (this.checkIsNum(number)){
            this.number = number;
        } else this.number = 0;        
    }

    get value() {return this.number;}
    set value(num) {
        if(!this.checkIsNum(num)) return;
        this.number = num;
    }

    add(value) {
        if (this.checkIsNum(value)) {
            this.number += value;
        }       
        return this;
    }
    
    substract(value) {
        if (this.checkIsNum(value)) {
            this.number -= value;
        }
        return this;
    }

    multiply(value) {
        if (this.checkIsNum(value)) {
            this.number *= value;
        }        
        return this;
    }

    divide(value) {
        if (this.checkIsNum(value) && value !== 0) {
            this.number /= value;
        }         
        return this;
    }

    checkIsNum(value) {
        if ( (isNaN(parseFloat(value)) && !isFinite(value)) ) {
            console.error('Error! Some value is not a number.');
            return false;
        }
        return true;
    }
}


let calc = new Calc(10);

calc.add(10).multiply(3).substract(5).divide(11);
