//Task 1
addLinks();
function addLinks() {
    let list = document.querySelector('ul');
    let liAmount = list.children.length;

    for (let i = list.children.length; i < liAmount + 3; i++ ) {
        let li = document.createElement('li');
        let textNode = document.createTextNode('item' + (i + 1));

        li.className = 'new-item';
        li.appendChild(textNode);
        
        list.appendChild(li);
    }
}

//Task 2
addStrongTags();
function addStrongTags() {
    let links = document.querySelectorAll('ul a');

    [].forEach.call(links, (item) => {
        let strong = document.createElement('strong');
        strong.insertAdjacentElement('beforebegin', item);
    });
}

//Task 3
let img = document.createElement('img');
img.src = 'https://static-news.moneycontrol.com/static-mcnews/2018/08/Germany.jpg';
img.alt = 'Hello . I am picture';
document.body.prepend(img);

//Task 4 
let mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', 'green');
mark.classList.add('green');

//Task 5
sortList();
function sortList() {
    let liCollection = document.querySelectorAll('ul li');
    let reversed = [].slice.call(liCollection).sort((prev , next) => {
        if(prev.textContent > next.textContent) return -1;
        if(prev.textContent < next.textContent) return 1;
        return 0;
    });

    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    reversed.forEach(element => ul.appendChild(element));
}
