// Higher-Order Function
// Task 1
function printResult(array, callback) {
    const separator = (typeof array[0] === "string") ? '' : ', ';
    return "New value: " + callback(array).join(separator);
}

function parseArray(array) {
    return array.map (element => {
        const type = typeof element;

        switch (type) {
            case "string":
                let result = element.split('');
                result[0] = result[0].toUpperCase();
                return result.join('');
                break;

            case "number":
                return element * 10;
                break;

            case "object":
                return element.name + " is " + element.age;
                break;
        }
    });
}

printResult(['my', 'name', 'is', 'Trinity'], parseArray);
printResult([10, 20, 30], parseArray);
printResult([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], parseArray);

function perseInverted(array) {
    return array.map(element => {
        return element.split('').reverse().join('');
    })
}

perseInverted(['abc', '123'], parseArray);

// Task 2
function every(arr, callback) {
    if (Array.isArray(arr) === false) return;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

let callBack = function(item, index, arr) {
    console.log(item > 5);
    return item > 5;
}

every([1, 2, 8, 3, 5, 7], callBack);

// Array. Methods
// Task 1
let numbers = [1, 2, 3, 5, 8, 9, 10];
let evenOdd = numbers.map(function(item, i, arr) {
    return {digit: numbers[i], odd: numbers[i] % 2 !== 0};
});

// Task 2
let arr = [12, 4, 50, 1, 0, 18, 40];
!arr.some(element => element === 0);

// Task 3
let words = ['yes', 'hello', 'no', 'easycode', 'what'];
let wordLength = words.map(function(word) {
    return word.length;
});
wordLength.some(element => element > 3);

// Task 4
function sortByIndex() {
    let arr = [
        {char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, 
        {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, 
        {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, 
        {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, 
        {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}
    ];
      
    return arr.sort(function(prev, next) {
        return prev.index - next.index;
    }).reduce(function(accum, curr) {
        return accum + curr.char;
      }, 0);
}

sortByIndex();

// Sort
// Task 1
function sortByLength() {
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }

    return result.sort(function(prev, next){
        if (prev.length < next.length) return -1;
        if (prev.length > next.length) return 1;
        return 0;
    })
}

console.log( sortByLength([14, 45], [1], ['a', 'c', 'd']) );

// Task 2
function sortByCores() {
    let processors = [
        {cpu: 'intel', info: {cores:2, сache: 3}},
        {cpu: 'intel', info: {cores:4, сache: 4}},
        {cpu: 'amd', info: {cores:1, сache: 1}},
        {cpu: 'intel', info: {cores:3, сache: 2}},
        {cpu: 'amd', info: {cores:4, сache: 2}}
    ];
    
    return processors.sort(function(prev, next) {
        return prev.info.cores - next.info.cores;
    });
}

sortByCores();
