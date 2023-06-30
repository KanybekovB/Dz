var day = prompt("День рождения");
var month = prompt("Месяц рождения").toLowerCase();

if (month === "март" && day >= 21 && day <= 31 || month === "апрель" && day <= 20 && day <= 30) {
    alert("Овен")
}else if (month === " апрель" && day >= 21  && day <= 30  || month === "май" && day <= 21  && day <= 31){
    alert("Телец")
}else if (month === "май" && day >= 22  && day <= 31  || month === "июнь" && day <= 21  && day <=30){
    alert("Близнецы")
}else if (month === "июнь" && day >=22  && day <=30  || month === "июль" && day <=22  && day <=31){
    alert("Рак")
}else if (month === "июль" && day >=23  && day <=31  || month === "август" && day <=23  && day <=31){
    alert("Лев")
}else if (month === "август" && day >=24  && day <=31  || month === "сентябрь" && day <=22  && day <=30){
    alert("Дева")
}else if (month === "сентябрь" && day >=23  && day <=30  || month === "октябрь" && day <=23  && day <=31){
    alert("Весы")
}else if (month === "октябрь" && day >=24  && day <=31  || month === "ноябрь" && day <=22  && day <=30){
    alert("Скорпион")
}else if (month === "ноябрь" && day >=23  && day <=30  || month === "декабрь" && day <=21  && day <=31){
    alert("Стрелец")
}else if (month === "декабрь" && day >=22  && day <=31  || month === "январь" && day <=20  && day <=31){
    alert("Козерог")
}else if (month === "январь" && day >=21  && day <=31  || month === "февраль" && day <=18  && day <=28){
    alert("Водолей")
}else if (month === "февраль" && day >=19  && day <=28  || month === "март" && day <=20  && day <=31){
    alert("Рыбы")    
}else if (month === "" && day >= 0){
    alert("Вы не указали день или месяц");
}else{
    alert("Ошибка, вы ввели что то не правильно");
}  
// календарь 2023