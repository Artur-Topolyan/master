function pow(a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result *= a;
  }

  return result;
}

let a = (5);
let b = (5);

if (b < 1) {
  console.log(`Степень ${b} не поддерживается, используйте натуральное число`);
} else {
  console.log( pow(a, b) );
}