// Object
let obj = {
    product: 'iphone'
};

obj.price = '1000';
obj['currency'] = 'dollar';

obj['details'] = {
    model: '7s',
    color: 'black'
};

console.log(obj);

// Primitive conversion
let a = 0 || 'string'; // 'string', т.к. "или" "запинается" на первом true
let a = 1 && 'string'; // 'string', т.к. "и" "запинается" на первом false, а здесь все значения true, то результатом будет последнее true
let a = null || 25; // 25, т.к. "или" "запинается" на первом true
let a = null && 25; // null, т.к. "и" "запинается" на первом false
let a = null || 0 || 35; // 35, т.к. "или" "запинается" на первом true
let a = null && 0 && 35; // null, т.к. "и" "запинается" на первом false

12 + 14 + '12' // "2612", сначала происходит операция сложения, а после - сложение со строкой, на выходе будет строка
3 + 2 - '1' // 4, минус относится к числовым преобразованиям (в отличие от плюса), поэтому выполняется арифметическая операция
'3' + 2 - 1 // 31, сначала конкотенация строк ("32"), затем приведение к числу и арифметическая операция
true + 2 // 3, т.к. true всегда равно "1"
+'10' + 1 // 11, с помощью + перед строкой с числовым значением происходит приведение к числу
undefined + 2 // NaN, т.к. undefined = NaN 
null + 5 // 5, null = 0
true + undefined // NaN, т.к. undefined = NaN


// If else
// Task1
let b;
if (b === 'hidden') {
    b = 'visible';
} else b = 'hidden';

// Task2
let c;
if (c === 0){
    c = 1;
} else if (c < 0){
    c = 'less then zero';
} else c *= 10;

// Task3
let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
};
if (car.age > 5){
    console.log('Need Repair');
    car.needRepair = true;
} else  car.needRepair = false;

// Task4
let item = { 
    name: 'Intel core i7', 
    price: '100$', 
    discount: '15%' 
};
if ('discount' in item && item.discount !== undefined){
    item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * parseInt(item.discount) / 100);
    console.log(item.priceWithDiscount);
} else console.log(item.price);

// Task6
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10;
let max = 20;

if (parseInt(product.price) >= min && parseInt(product.price) <= max){
    console.log(product.name);
} else console.log("Товар не найден");
