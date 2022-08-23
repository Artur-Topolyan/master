function sum(x) {
  return function(y) {
      return x + y;
  };
}

console.log( sum(1)(2), sum(2)(2), sum(40)(2) );