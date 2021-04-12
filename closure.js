function getMathModule(x) {
  //declare the local variable 'y'
  //return an object with the following functions: sum, substract, multiply, divide
  const y = 10;

  return {
    sum: function () {
      return x + y;
    },
    substract: function () {
      return x - y;
    },
    multiply: function () {
      return x * y;
    },
    divide: function () {
      return x / y;
    },
  };
}

console.log(getMathModule(10).sum());
console.log(getMathModule(10).substract());
console.log(getMathModule(10).multiply());
console.log(getMathModule(10).divide());
