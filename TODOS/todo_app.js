/**
 * todosStorage - место для хранения todos
 * currentTodos - список текущих задач (массив)
 * deletedTodos - список удаленных задач (массив)
 */

const todosStorage = {
   currentTodos: [],
   deletedTodos: []
}

/** 
 * @param {String} title 
 * @param {String} text
 * @returns {[]} currentTodos
 */
const addTodoItem = (title, text) => {
   if (!title) return console.log('Please provide todo title')
   if (!text) return console.log('Please provide todo text')

   todosStorage.currentTodos.push({title, text, id: generateId()});
   return todosStorage.currentTodos;
}

/**
 * generateId - создает произвольную строку
 * @returns {String} - новый id
 */
const generateId = () => {
   const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
   let id = '';

   for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * uniqueValues.length);
      id += uniqueValues[index];
   }

   return id;
}

/**
 * 
 * @param {String} id
 * @returns {[]} currentTodod
 */
const deletedTodoItem = (id) => {
   if (!id) return console.log("Передайте id удаляемой задачи.");

   todosStorage.currentTodos = todosStorage.currentTodos.filter((todoItem) => todoItem.id !== id);
   return todosStorage.currentTodos;
}

/**
 * 
 * @param {String} id 
 * @param {*String} title 
 * @param {*String} text 
 */
const editTodoItem = (id, title, text) => {
   if (id === undefined || id.length === 0) return;

   let index = todosStorage.currentTodos.findIndex(element => element.id === id);
   
   if (index === null) return;
   if (title !== undefined) todosStorage.currentTodos[index].title = title;
   if (text !== undefined) todosStorage.currentTodos[index].text = text;
}
