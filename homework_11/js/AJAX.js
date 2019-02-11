class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

const url = 'https://jsonplaceholder.typicode.com';
const requestProvider = new CustomHttp();

requestProvider.get(`${url}/users`, (response) => fillTable(response));

function fillTable(response) { 
    let users = JSON.parse(response);
    let table = document.getElementById('list-tab');
    
    users.forEach(user => {
        let userRowHtml = `<a class="list-group-item list-group-item-action" id="list-profile-list" 
                            data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">${user.name}</a>`;

        table.insertAdjacentHTML('beforeend', userRowHtml);
        
        let insertedRow = table.children[table.childElementCount - 1];
        
        insertedRow.addEventListener('click', () => userNameClicked(element))
    }); 
}

function userNameClicked(user) {
    let infoList = document.getElementById('details-info');
    
    infoList.innerHTML = '';

    for(let key in user) {
        if(typeof user[key] !== 'object') {
            let li = document.createElement('li');

            li.textContent = user[key];
            li.className = 'list-group-item';
            infoList.appendChild(li);
        }
    }
}
