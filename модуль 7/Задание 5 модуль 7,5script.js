class Pribor {
  static watt1() {
      console.log('Потребляет не более 450 W')
  }
}

class electroPribor extends Pribor {
  static watt2() {
      console.log('Потребляет не более 550 W')
  }

  static watt3() {
      console.log('Потребляет не более 650 W')
  }
}


Pribor.watt1();
electroPribor.watt2();
electroPribor.watt3();
