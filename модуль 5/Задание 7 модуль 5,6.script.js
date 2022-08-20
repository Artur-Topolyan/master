let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'sdfsd', 0];
let zero = 0;
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++){
  if (arr[i] === 0){
    zero +=1;
  }else if (typeof (arr[i]) !== "number" || typeof (arr[i]) ==="NaN"){
    console.log (`${arr[i]} - не число`);
  }else if (arr[i] %2 === 0){
    even +=1;
  }else{
    odd +=1;
  }
}
console.log(`${zero}-нулей`);
console.log(`${even}-чётных`);
console.log(`${odd}-ну чётных`);