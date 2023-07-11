//*GMAIL CHECK*

const gmailCheck = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmail_result = document.querySelector('#gmail_result');
const regExp = /\w{5}@gmail.com$/ // *ДОЛЖЕН БЫТЬ НЕ МЕНЬШЕ 5

gmailButton.addEventListener('click', () => {
    let checkGmail = regExp.test(gmailCheck.value);
    if(checkGmail === true) {
        gmail_result.innerHTML = 'account is found';
        gmail_result.style.color = 'green';
    }else{
        gmail_result.innerHTML = 'account is not found';
        gmail_result.style.color = 'red';
    }
});


//*BLOCK*

const childBlock = document.querySelector('.child_block');
let leftPx = 0; 
let maxCountPx = 447 // ОГРАНИЧЕНИЕ ПИКСЕЛЕЙ
let delay = 5 // Задержка в милисекундах
const moveBlock = () => {
  leftPx++;
  console.log(leftPx);

  if (leftPx < maxCountPx) {
    setTimeout(moveBlock, delay); //* setTimeout метод для замедления
  }

  childBlock.style.left = `${leftPx}px`;
};

moveBlock();
