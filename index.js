function isFizzBuzz(num) {
  if ((typeof num === "number" || typeof num === "string") && num >= 0) {
    return num % 15 == 0;
  }

  throw new Error("The value should be type: number or string");
}

module.exports = isFizzBuzz;
