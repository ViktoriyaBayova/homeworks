// Task 1
console.log(document.head);

// Task 2
console.log(document.body);

// Task 3
console.log(document.body.children);

// Task 4
console.log(document.body.children[0].childNodes);

// Task 5
let elements = document.body.children[0].children;

for (let i = 1; i < elements.length - 1; i++) {
    console.log(elements[i]);
}
