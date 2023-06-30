var Starbucks = {
  coffee: {
    americano:
      "Американо — классический кофе с примерно 30 мл эспрессо и 120 мл горячей воды.",
    latte:
      "Латте — кофейный напиток на основе эспрессо с добавлением молока и молочной пены.",
    cappuccino:
      "Капуччино — кофейный напиток на основе эспрессо с добавлением молока и пены из молока.",
    mocha:
      "Мокка — кофейный напиток на основе эспрессо с добавлением горячего шоколада и молока.",
    espresso:
      "Эспрессо — концентрированный кофе, приготовленный путем пропускания горячей воды под высоким давлением через молотый кофе.",
    decaf: false,
  },
  tea: {
    green:
      "Зеленый чай — напиток, приготовленный из неокисленных листьев чайного куста.",
    black:
      "Черный чай — полностью окисленный чай, имеющий насыщенный вкус и аромат.",
    herbal:
      "Травяной чай — напиток, приготовленный из смеси сушеных трав, фруктов и пряностей.",
  },
};
var choice = prompt("Что вы предпочитаете: coffee или tea?");

if (choice === 'coffee'){
  var coffeeType = prompt("Пожалуйста, выберите вид кофе: americano, latte, cappuccino, mocha, espresso или decaf");
  switch (coffeeType) {
    case "americano":
      console.log(`Ваш заказ: ${coffeeType}. Описание: ${Starbucks.coffee.americano}`);
      break;
    case "latte":
      console.log(`Ваш заказ: ${coffeeType}. Описание: ${Starbucks.coffee.latte}`);
      break;
    case "cappuccino":
      console.log(`Ваш заказ: ${coffeeType}. Описание: ${Starbucks.coffee.cappuccino}`);
      break;
    case "mocha":
      console.log(`Ваш заказ: ${coffeeType}. Описание: ${Starbucks.coffee.mocha}`);
      break;
    case "espresso":
      console.log(`Ваш заказ: ${coffeeType}. Описание: ${Starbucks.coffee.espresso}`);
      break;
    case "decaf":
      if (Starbucks.coffee.decaf) {
        console.log(`Ваш заказ: ${coffeeType}. Описание: ${Starbucks.coffee.decaf}`);
      } else {
        console.log(`Извините, ${coffeeType} не в наличии. Выберите что-то другое.`);
      }
      break;
    default:
      console.log(`Извините, ${coffeeType} не найден. Попробуйте заказать что-то другое.`);  
  }    
}else if (choice === 'tea'){
  var  teaType = prompt("Пожалуйста, выберите вид чая: green, black или herbal");
  switch(teaType){
    case "green":
      console.log(`Ваш заказ: ${teaType}. Описание: ${Starbucks.tea.green}`);
      break;
    case "black":
      console.log(`Ваш заказ: ${teaType}. Описание: ${Starbucks.tea.black}`);
      break;
    case "herbal":
      console.log(`Ваш заказ: ${teaType}. Описание: ${Starbucks.tea.herbal}`);
      break;
    default:
      console.log(`Извините, ${teaType} не найден. Попробуйте заказать что-то другое.`);
  }
}else{
  console.log("Извините, выбор не распознан. Попробуйте еще раз.");
}