const todosListElement = document.getElementById('todos-list');
const emptyListElement = document.getElementById('empty-list');
const inputElement = document.getElementById('todo-input');

let id = 0;
const todos = [];

function addTodo(newTitle) {
    const newTodo = {
            id: id,    
            title: newTitle,
            isDone: false,
    };
    todos.push(newTodo);
}

addTodo('task 4')
->
{
    title: 'task 4',
    isDone: false,
}

function renderList() {
    if (todos.length == 0) {
        todosListElement.style.display = 'none';
        emptyListElement.style.display = 'block';
    } else {
        emptyListElement.style.display = 'none';
        todosListElement.style.display = 'block';
    }

    todosListElement.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let todoTitleClass = 'todo-title';
        todosListElement.innerHTML += `
            <div class="todo">
                <div class="${todoTitleClass}"">${todos[i].title}</div>
                <div class="todo-delete">x</div>
            </div>
        `;
    }
}
todosListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('todo-title')) {
      event.target.classList.toggle('todo-done');
    }
  });
  
inputElement.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (inputElement.value != '') {
            todos.push({
                title: inputElement.value,
                isDone: false,
            });
            inputElement.value = '';
            renderList();
        }
    }
});

renderList();

/*
<div class="todo">
    <div class="todo-title">Pese hambad</div>
    <div class="todo-delete">x</div>
</div>
<div class="todo">
    <div class="todo-title todo-done">Vii prügi välja</div>
    <div class="todo-delete">x</div>
</div>
*/