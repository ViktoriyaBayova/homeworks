// Constructors
// Task 1
function Car (model, age) {
    this.carModel = model;
    this.carAge = age;
    this.getCarModel = function() {
        return this.carModel.charAt(0).toUpperCase() + this.carModel.slice(1);
    }
    this.getProductionYear = function() {
        let year = new Date().getFullYear();
        let productionYear =  year - this.carAge;
        return productionYear;
    }
}

var lexus = new Car ('lexus', 2);
console.log(lexus.getCarModel());
console.log(lexus.getProductionYear());

// Task 2
function Encrypt(str) {
    this.str = str;
    this.encryptStr = '';
        
    for (var i = 0; i < this.str.length; i++) {
        this.encryptStr += this.str.charCodeAt(i) + ' ';
    }

    this.getStr = function() {
        return this.str;
    }
    this.getEncryptStr = function() {
        return this.encryptStr;
    }
}

var str = new Encrypt('It is my encryption string');
console.log(str.getStr());
console.log(str.getEncryptStr());

// Closures
// Task 1
function minus(num1) {
    num1 = !isNaN(num1) ? num1 : 0;
    return function (num2) {
        num2 = !isNaN(num2) ? num2 : 0;
        return num1 - num2;
    }
}

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));  
console.log(minus()());

// Task 2
function MultiplyMaker(num1) {
    let value = num1;
    return function (num2) {
        return value *= num2;
    }
}

const multiply = MultiplyMaker(2);
console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)

// Task 3
const str = (function() {
    let value = '';

    function setContents(string) {
        if (typeof string === "number") {
            value = +string;
        } else value = string;
    }

    function getContents() {
        return value;
    }
    
    function getContentsLength() {
        return value.length;
    }

    function getContentsReverce() {
        return value.split('').reverse().join('');
    }

    return {
        setValue: setContents,
        getValue: getContents,
        getValueLength: getContentsLength,
        getValueReverce: getContentsReverce
    };

})();

str.setValue('abcde');
console.log(str.getValue());
console.log(str.getValueLength());
console.log(str.getValueReverce());

// Task 4
const calc = (function() {
    let value = 0;

    function setValue(num) {
        if (!isNaN(num)) value = num;
        return this;
    }

    function add(num) {
        if (!isNaN(num)) value += num;
        return this;
    }

    function substract(num) {
        if (!isNaN(num)) value -= num;
        return this;
    }

    function multiply(num) {
        if (!isNaN(num)) value *= num;
        return this;
    }

    function divide(num) {
        if (!isNaN(num)) value /= num;
        return this;
    }

    function pow(num) {
        if (!isNaN(num)) value = Math.pow(value, num);
        return this;
    }

    function getValue() {
        if (value % Math.round(value) === 0) {
            console.log( Math.round(value) );
        } else console.log(value.toFixed(2));
        return this;
    }

    return {
        setValue,
        add,
        substract,
        multiply,
        divide,
        pow,
        getValue
    };
})();

calc.setValue(10).pow(2).getValue();
calc.setValue(10).multiply(2).divide(3).getValue();
