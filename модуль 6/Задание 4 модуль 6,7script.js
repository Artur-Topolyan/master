function printNumbers(from, to) {
  let current = from;//первое число

  let timerId = setInterval(function() {
    console.log(current); //выведение в консоль
    if (current == to) { //второе число
      clearInterval(timerId); 
    }
    current++;
  }, 1000);//интервал
}

// использование:
printNumbers(5, 15);