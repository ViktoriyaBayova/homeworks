//Task 1
document.querySelector('ul').classList.add('list');

//Task 2
setId( document.querySelector('ul') );

function setId(ul) {
    let siblingFound = false;
    let element = ul;

    do {
        if (element.nextElementSibling === null) return;

        element = element.nextElementSibling;
        
        if (element.tagName === 'A') {
            siblingFound = true;
            element.id = 'link';
        }

    } while (!siblingFound)
}

//Task 3
[].forEach.call( document.querySelectorAll('li'), (item, i) => {
    if (i % 2 === 0) item.classList.add('item');
});

//Task 4
[].forEach.call( document.querySelectorAll('a'), item => item.classList.add('custom-link') );
