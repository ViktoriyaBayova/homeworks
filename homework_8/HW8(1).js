// Task 1
let btnMsg = document.getElementById("btn-msg");
btnMsg.addEventListener('click', () => alert( btnMsg.getAttribute('data-text') ) );

// Task 2
let btnHover = document.getElementById("btn-msg");
btnHover.onmouseover = (e) => e.target.classList.add('red-button');
btnHover.onmouseout = (e) => e.target.classList.remove('red-button');

// Task 3
let tag = document.getElementById("tag");
document.body.addEventListener('click', (e) => tag.textContent = e.target.tagName);

// Task 4
let btn = document.getElementById("btn-generate");
btn.addEventListener('click', function() {
    let item = document.createElement('li');
    let list = document.querySelector('ul');
    item.textContent = 'Item ' + (list.querySelectorAll('li').length + 1);
    list.appendChild(item);
});
