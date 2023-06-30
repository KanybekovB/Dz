 //callback

// function buttonClick(){
//     return console.log('buttonClick!');
// };

// let button = document.querySelector('.click');
// button.addEventListener('click', buttonClick)

// let arg = 0

// function num(...arg) { 
//     let arr = []
//     for (let i = 0; i < arg.length; i++){
//         arr.push(arg[i] ** 2)
//     }
//     return arr
// }
// console.log(num(1,2,3,4,5))

// function doSomeMath(array, toDo) {
//     let arr = []
//     for (let i = 0; i < array.length; i++){
//         arr.push(toDo(array[i]));
//     }
//     return arr
// }

// function sum(number) {
//     return number + 2
// }

// console.log(doSomeMath([2,34,5,5], sum))

const input = document.querySelector('#input');
const createButton = document.querySelector('.create_button');
const todoList = document.querySelector('.todo_list');

const createTodo = () => {
    if (!input.value.trim()) {
        return false;
    }else {
        const div = document.createElement('div');
        const text = document.createElement('h3');
        const divButton = document.createElement('div');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        div.setAttribute('class', 'block_text');
        deleteButton.setAttribute('class', 'delete_button');
        editButton.setAttribute('class', 'edit_button');
        divButton.setAttribute('class', 'div_button');

        deleteButton.innerHTML = 'Delete'
        editButton.innerHTML = 'Edit';
        text.innerHTML = input.value;

        divButton.append(deleteButton, editButton,);
        div.append(text, divButton);
        todoList.prepend(div)

        deleteButton.onclick = () => div.remove()
        editButton.onclick = () => {
            let edit = prompt(`Изменить ${text.innerHTML}?`)
            return text.innerHTML = edit
        }

    }
}

createButton.onclick = () => {
    createTodo();
    input.value = ''
}
window.addEventListener('keydown', (e)=> {
    if (e === 'Enter') createTodo();
});
