const number = {

  1: "abc"
 
 }
 
 // создаем объект с прототипом
 
 const alfavit = Object.create(number);
 
 // добавляем собственное свойство объекту bukva
 
 alfavit.bukva = "123";
 
 // обращаемся к свойству, которого нет в объекте bukva, но есть в его прототипе numbe 
 
 for (let key in alfavit) {
 
    console.log(key); // city, ownCity
 
 }