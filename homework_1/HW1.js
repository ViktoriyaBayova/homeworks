// STRING
let string = 'some test string';

// Task1
console.log (string.charAt(0));
console.log (string[string.length - 1]);

// Task2
console.log (string[0].toUpperCase());
console.log (string[string.length - 1].toUpperCase());

// Task3
console.log (string.indexOf('string'));

// Task4
console.log (string.lastIndexOf(' '));

// Task5
console.log (string.substr(5, 4));

// Task6
console.log (string.substring(5, 9));
console.log (string.slice(5, 9));

// Task7
console.log (string.slice(0, -6));
console.log (string.slice(0, string.length-6));

// Task8
let a = 20,
    b = 16,
    str = '' + a + b;

console.log (str);


// NUMBER

// Task1
let p = Math.PI;
console.log (Math.round(p * 100) / 100);

// Task2
console.log (Math.max (15, 11, 16, 12, 51, 12, 13, 51));
console.log (Math.min (15, 11, 16, 12, 51, 12, 13, 51));

// Task3
console.log (Math.round (Math.random () * 100) / 100);


let min = 0,
    max = 7;
console.log (Math.floor (Math.random () * (max - min)));

// Task4
console.log ( (0.6 * 10 + 0.7 * 10) / 10);

// Task5
let x = '100$';
console.log (parseInt(x));
