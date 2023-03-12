class Random {
  randomString(length) {
    const min = 97;
    const max = 122;
    const randomsArr = [];
    for (let i = 0; i < length; i++) {
      let randomChar = String.fromCharCode(this.randomNumber(min, max));
      if (i % 2 == 0) {
        randomChar = randomChar.toUpperCase();
      }
      randomsArr.push(randomChar);
    }
    return randomsArr.join("") + this.randomNumber(min, max);
  }

  randomNumber(min, max) {
    if (!min && !max) {
      throw new Error("You need to provide minimum and maximum number");
    }
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  }
}
export default new Random();
