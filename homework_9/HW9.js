// This
// Task 1
const rectangle = {
    width: 10, 
    height: 15, 
    getSquare: function() {return this.width * this.height}
};

console.log(rectangle.getSquare());

// Task 2
const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {return this.price},
    getPriceWithDiscount: function() {return this.price - (this.price * parseInt(this.discount) / 100)}
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// Task 3
const object = {
    height: 10,
    heightPlusOne: function() {return this.height++}
};

console.log(object.heightPlusOne()); 
console.log(object.heightPlusOne()); 

// Task 4
const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    },
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value); 

// Task 1.1
const products = {
    price: 230,
    numberOfProducts: 87,
    getTotalCost: function() {return this.price * this.numberOfProducts}
};

console.log(products.getTotalCost());

// Task 1.2
const details = {
    numberOfProducts: 53,
    price: 125
};

console.log( products.getTotalCost.call(details) );

// Task 1.3
let sizes = {
    width: 5, 
    height: 10
},
    getSquare = function () {return this.width * this.height};

console.log( getSquare.call(sizes) );

// Task 1.4
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight());


// Arrow function
let sum = (...arguments) => {
    const params = Array.prototype.slice.call(arguments);
    if (!params.length) return 0;
    return params.reduce((prev, next) => { return prev + next; });
};

console.log( sum(1, 2, 3, 4) ); 
console.log(sum()); 

// Destructuring
// Task 1
function getArguments() {
    let [first, ...other] = arguments;
    return {first, other};
}

console.log(getArguments('a','b','c','d'));

// Task 2
const organisation = {  
    name: 'Google',   
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};

function getInfo({name = 'Unknown', info: {partners:[first,second]}}) {
    console.log(`Name: ${name}, Partners: ${first} ${second}`);
}
getInfo(organisation); 
