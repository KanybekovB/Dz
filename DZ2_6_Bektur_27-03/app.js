const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
let inputElement = document.querySelector("#inputValue");
let value = parseInt(inputElement.value)

increment.addEventListener('click', function () {
    value++;
    inputElement.value = value;
})
decrement.addEventListener('click', function () {
    if (value > 0) {
        value--;
        inputElement.value = value
    }
})

let buttons = document.querySelectorAll('.button')
for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (index) {
        console.log("Вы нажали на кнопку " + index.target.textContent);
    }
}