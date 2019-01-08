// Functions
// Task 1
function multiply() {
    let length = arguments.length;
    let result = 1;

    if(length === 0) {
        return 0;
    }

    for (let i = 0; i < length; i++) {
        result *= arguments[i];
    }

    return result;
}

console.log( multiply(1, 2, 3) );

// Task2
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log( reverseString('test') );

// Task3
function getCodeStringFromText(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i) + " ";
    }

    return result;
}

console.log( getCodeStringFromText("hello") );
    
// Task4
function randomNumber(num) {
    if (num <= 0 || num > 10) {
        return "num is not valid";
    }

    let random = Math.round(Math.random() * 10);
    return random === num ? "You win" : "You are wrong. Your number is " + num + " but random is " + random;
}

console.log( randomNumber(7) );

// Task5
function getArray(n) {
    let result = [];

    if (n <= 1) {
        result.push(n);
        return result;
    }
    
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }

    return result;
}

console.log( getArray(10) );

// Task6
function doubleArray(arr) {
    return arr.concat(arr);
}

console.log( doubleArray([1,2,3]) );

// Task7
function changeCollection() {
    let result = [];

    for (let i = 0; i < arguments.length; i++) {
        arguments[i].shift();
        result.push(arguments[i]);
    }

    return result;
}

console.log( changeCollection([1,2,3], ['a', 'b', 'c']) )

// Task8
function funcGetUsers(users, key, value) {
    let result = [];

    if (users == undefined || key == undefined || value == undefined) {
        return result;
    } 
    
    for (let user of users) {
        if (key in user && user[key] === value) {
            result.push(user);
        }
    }

    return result;
}

console.log( funcGetUsers([{name: 'Denis', age: 29, gender: 'male'}, 
        {name: 'Ivan', age: 30, gender: 'male'}, {name: 'Inna', age: 27, gender: 'female'}], 'gender', 'male') );
