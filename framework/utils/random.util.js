class Random {
  randomString(length) {
    const randomsArr = [];
    for (let i = 0; i < length; i++) {
      let randomChar = String.fromCharCode(this.randomNumber());
      if (i % 2 == 0) {
        randomChar = randomChar.toUpperCase();
      }
      randomsArr.push(randomChar);
    }
    return randomsArr.join("") + this.randomNumber();
  }

  randomNumber(min = 97, max = 122) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  }
}
export default new Random();
