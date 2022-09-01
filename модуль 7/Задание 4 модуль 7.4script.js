function Pribor(name){
  this.color = 'black',
  this.name = name
}

Pribor.prototype.getWatt = function(watt){
  console.log(`Потребляет не более ${watt} w`)
}

function electroPribor(name, weight){
  this.name = name,
  this.weight = weight
}

electroPribor.prototype = new Pribor()

electroPribor.prototype.getWatt = function(watt){
  console.log(`Потребляет ${watt} w`)
}
const drel = new electroPribor('name', 'weight');
const bolgarka = new Pribor('name');
const pila = new Pribor('name');

drel.getWatt(450)
bolgarka.getWatt(650)
pila.getWatt(750)