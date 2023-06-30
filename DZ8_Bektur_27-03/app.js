let button = document.querySelectorAll('.button')
let answer = document.querySelectorAll('.answer')
let click = false

button.forEach(function(button, i){
    button.addEventListener('click', () => {
        answer[i].classList.toggle('answer')
        if(click){
            button.innerHTML = 'Показать ответ'
            click = false
        }else{
            button.innerHTML = 'Скрыть ответ'
            click = true
        }
    })
}) 
// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         answer[i].classList.toggle('answer');
//         if (click) {
//           buttons[i].innerHTML = "Показать ответ";
//           click = false;
//         } else {
//           buttons[i].innerHTML = "Скрыть ответ";
//           click = true;
//         }
//     })
// }