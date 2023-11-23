const createButton = document.querySelector('#create_button');
const input = document.querySelector('#input');
const todoList = document.querySelector('.todo_list');

const deleteTodo = (element) => {
    element.remove();
}

const editTodo = (textElement) => {
    const newText = prompt('Введите новое название:');
    if (newText !== null) {
        textElement.innerText = newText;
    }
}

const createTodo = () => {
    if (input.value === '') {
        return alert('Напиши что-нибудь');
    }

    const div = document.createElement('div');
    div.setAttribute('class', 'block_text');
    const divButton = document.createElement('div');
    divButton.setAttribute('class', 'div_button');
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete_button');
    deleteButton.innerText = 'DELETE';

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');
    editButton.innerText = 'EDIT';

    const text = document.createElement('h3');

    text.innerText = input.value;
    divButton.append(deleteButton, editButton);
    div.append(text, divButton);
    todoList.prepend(div);
    input.value = '';

    text.addEventListener('click', () => {
        text.classList.toggle('toggle');
    });

    deleteButton.addEventListener('click', () => {
        deleteTodo(div);
    });

    editButton.addEventListener('click', () => {
        editTodo(text);
    });
}

createButton.onclick = () => createTodo();
