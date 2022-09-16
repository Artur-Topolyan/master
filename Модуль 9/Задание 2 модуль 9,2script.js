var list = {
  'list': [
    {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ],
};

localStorage.setItem('list', JSON.stringify(list));

var restoredList = JSON.parse(localStorage.getItem('list'));

console.log(restoredList);