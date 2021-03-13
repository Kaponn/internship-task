const power = (base, exponent) => {
  if (exponent === 1) {
    return base;
  }

  let temp = power(base, exponent >> 1);

  return exponent % 2 ? base * temp * temp : temp * temp;
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const millerTest = (oddNum, number) => {
  let rand = getRandomInt(2, number - 2);
  let x = power(rand, oddNum) % number;

  if (x === 1 || x === number - 1) {
    return true;
  }

  while (oddNum != number - 1) {
    x = (x * x) % number;
    oddNum *= 2;

    if (x == 1) {
      return false;
    }
    if (x == number - 1) {
      return true;
    }
  }

  return false;
}

const isPrime = (number, accuracy) => {
  if (number <= 1 || number === 4) {
    return false;
  }
  if (number <= 3) {
    return true;
  }

  let oddNum = number - 1;

  while (oddNum % 2 === 0) {
    oddNum /= 2;
  }

  for (let i = 0; i < accuracy; i++) {
    if (!millerTest(oddNum, number)) {
      return false;
    }
  }
  return true;
}


const isPrimeInArray = (number, arrayToCheck) => {
  let count = 0;
  const accuracy = 5;
  for (let i = 0; i < arrayToCheck.length; i++) {
    if (number === arrayToCheck[i]) {
      count++;
    }
  }
  if (isPrime(count, accuracy)) {
    return true;
  } else {
    return false;
  }
}

const formatArray = (firstArray, secondArray) => {
  let newArray = firstArray.filter(number => !isPrimeInArray(number, secondArray));
  return newArray;
}
