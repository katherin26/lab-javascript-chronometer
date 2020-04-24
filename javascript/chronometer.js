//Iteration 1: The logic

//the class will have two properties: `currentTime`, `intervalId`.
class Chronometer {
  //create a Chronometer class
  constructor() {
    //Constructor method ! without arguments
    this.currentTime = 0; // properties!
    this.intervalId = 0; // properties!
  }

  //Chronometer methods------------- =)

  startClick(callback) {
    // This method will receive the time
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime += 1;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60; // % modulus  = The remainder left over when one operand is divided
  }

  twoDigitsNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}`;
  }
}
