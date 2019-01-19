// Todo manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. очистить форму

    
const todosStorage = {
    todos: []
};

// UI Elements
const table = document.querySelector('.table tbody');
const form = document.forms['addTodoForm'];
const title = form.elements['title'];
const text = form.elements['text'];

// click, keyUp, keyDown, submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!title.value || !text.value) return console.log('Введите title и text');

    addNewTodoToStorage(title.value, text.value);

    form.reset();
});

   
/**
* generateId - создает произвольную строку 
* @returns {string} - новый id
*/
function generateId() {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let char of uniqueValues) {
        let index = Math.floor(Math.random() * uniqueValues.length);
        id += uniqueValues[index];
    }
 
    return id;
 }

/**
* addNewTodoToStorage - добавляет новый todo в storage а потом в view
* @param {String} title 
* @param {String} text
* @returns {[]} currentTodos
*/
function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');
 
    const newTodo = {title, text, id: generateId()}
    todosStorage.todos.push(newTodo);

    // Добавим в разметку
    addNewTodoToView(newTodo);

    return todosStorage.todos;
 };

 /**
* 
* @param {String} id 
* @returns {[]} currentTodos
*/
function deleteTodoFromStorage(id) {
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return console.log(checkIdRes.msg);
    
    let removedTask;

    for (let i = 0; i < todosStorage.todos.length; i++) {
        if (todosStorage.todos[i].id === id) {
            removedTask = todosStorage.todos.splice(i, 1);
            break;
        }
    }

    // удаляем с разметки
    deleteTodoFromView(id);
    
    return removedTask;
 }


/**
 * 
 * @param {String} id 
 */
function checkId(id) {
    if (!id) return { error: true, msg: 'Передайте id удаляемой задачи.' };

    const idIsPresent = todosStorage.todos.some((todo) => todo.id === id );
    if (!idIsPresent) return { error: true, msg: 'Задачи с таким id не существует' };

    return { error: false, msg: '' };
}


// View functions

/**
 * 
 * @param {String} id 
 */
function deleteTodoFromView(id) {
    const target = document.querySelector(`[data-id="${id}"]`);
    target.parentElement.removeChild(target);
}

/**
 * 
 * @param {*} todo
 */
function addNewTodoToView(todo) {
    const template = todoTemplate(todo);
    table.insertAdjacentHTML('afterbegin', template);
}

/**
 * 
 * @param {*} todo 
 * todo {
 *  id: string;
 *  title: string;
 *  text: string;
 * }
 */
function todoTemplate(todo) {
    return `
        <tr data-id="${todo.id}"> 
            <td>${todo.title}</td>
            <td>${todo.text}</td>
            <td>
                <i class="fas fa-trash"></i>
                <i class="fas fa-edit"></i>
            </td>
        </tr>
    `;
}

