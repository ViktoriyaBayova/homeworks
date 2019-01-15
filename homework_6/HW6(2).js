// Task 1
function isParent(parent, child) {
    let parentElem = child.parentElement;
    while (parentElem != null) {
        if (parentElem == parent) return true;
        parentElem = parentElem.parentElement;
    }
    return false;
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// Task 2
let links = document.links;
for (let i = 0; i < links.length; i++) {
    if (!links[i].matches('ul a')) {
        console.log(links[i]);
    }
}

// Task 3
console.log(document.getElementsByTagName('ul')[0].previousElementSibling);
console.log(document.getElementsByTagName('ul')[0].nextElementSibling);

// Task 4
console.log(document.querySelectorAll('ul li').length);
