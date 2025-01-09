//function Control(temp) {
//  console.log(temp);
//}

class Control {
  constructor(temp, color) {
    this.color = color;
    this.temp = temp;
    this.isOn = false;
  }

  power() {
    this.isOn = !this.isOn;
    return "Plin!";
  }

  upper() {
    if (this.isOn && this.temp < 30) {
      this.temp += 1;
    }
    return this.temp;
  }

  down() {
    if (this.isOn && this.temp > 16) {
      this.temp -= 1;
    }
    return this.temp;
  }
}

const control1 = new Control(17);
const control2 = new Control(20);
console.log(control1.color); // undefined (cor não passada ao instanciar control1)
console.log(control1.isOn);
console.log(control1.power());
console.log(control1.isOn);
console.log(control1.upper());
console.log(control1.upper());

// DOM Elements
const powerButton = document.querySelector(".power");
const upButton = document.querySelector(".up");
const downButton = document.querySelector(".down");
const displayValue = document.querySelector(".display");

const airButton = new Control(17, "Cinza");

powerButton.addEventListener("click", () => {
  airButton.power();
  displayValue.innerHTML = airButton.isOn ? `${airButton.temp}°C` : "";
});

upButton.addEventListener("click", () => {
  if (airButton.isOn) {
    airButton.upper();
    displayValue.innerHTML = `${airButton.temp}°C`;
  }
});

downButton.addEventListener("click", () => {
  if (airButton.isOn) {
    airButton.down();
    displayValue.innerHTML = `${airButton.temp}°C`;
  }
});