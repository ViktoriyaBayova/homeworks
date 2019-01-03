// Switch case
let a = 'inline';
switch(a){
    case 'block':
        console.log('block');
    break;
    case 'none':
        console.log('none');
    break;
    case 'inline':
        console.log('inline');
    break;
    default:
        console.log('other');
}

// Ternary operator
let b;
b = b === 'hidden'? 'visible' : 'hidden';

let c;
c === 0 ? c = 1 : c < 0 ? c = 'less than zero' : c *= 10;

let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
};
car.needRepair = car.age > 5 ? true : false;


// For, while
// Task 1
let str = 'i am in the easycode';
let arr = str.split(" ");
let newStr = "";
for(let i = 0; i < arr.length; i++) {
    let firstLetter = arr[i].charAt(0);
    newStr += arr[i].replace(firstLetter, firstLetter.toUpperCase()) + ' ';
}
console.log(newStr);

// Task 2
let str = "tseb eht ma I";
let revStr = "";
for(let i = str.length-1; i >= 0; i--) {
    revStr += str.charAt(i);
}
console.log(revStr);

// Task 3
let fact = 1;
let num = 10;
for (let i = 1; i <= num; i++) {
    fact *= i; 
}
console.log(fact);

// Task 4
let str = 'JavaScript is a pretty good language';
let arr = str.split(" ");
let newStr = "";
for(let i = 0; i < arr.length; i++){
    let firstLetter = arr[i].charAt(0);
    newStr += arr[i].replace(firstLetter, firstLetter.toUpperCase());
}
console.log(newStr);

// Task 5
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(let value of arr) {
    if(value % 2 != 0) console.log(value);
}

// Task 6
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};
for(let key in list){
    if(typeof list[key] === 'string'){
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);
