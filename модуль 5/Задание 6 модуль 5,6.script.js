let arr = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];
let element = arr[0];
for (item of arr){
  if(item !== element){
    console.log("false");
  }else{
    console.log("true");
  }
}