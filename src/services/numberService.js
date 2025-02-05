const axios = require("axios");
// Checks if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Checks if a number is perfect (sum of its proper divisors equals the number)
function isPerfect(n) {
  if (n < 1) return false;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}

// Checks if a number is an Armstrong number (sum of its digits raised to power equals number)
function isArmstrong(n) {
  const digits = String(n).split("");
  const power = digits.length;
  const sum = digits.reduce(
    (sum, digit) => sum + Math.pow(parseInt(digit), power),
    0
  );
  return sum === n;
}

// Calculates sum of digits in a number, preserving negative signs
function getDigitSum(n) {
  const isNegative = n < 0;
  const sum = String(Math.abs(n))
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  return isNegative ? -sum : sum;
}

// Returns various properties of a number
const getNumberProperties = (number) => {
  const isArmstrongNumber = isArmstrong(number);
  const isOdd = number % 2 !== 0;

  const classifications = [];
  if (isArmstrongNumber) classifications.push("armstrong");
  classifications.push(isOdd ? "odd" : "even");

  return {
    isPrime: isPrime(number),
    isPerfect: isPerfect(number),
    classifications,
    digitSum: getDigitSum(number),
  };
};

// Fetches a math-related fun fact about the number from numbersapi.com
const getFunFact = async (number) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    return response.data;
  } catch (error) {
    console.error("Error fetching fun fact:", error);
    return `Too shy to get a fun fact for ${number}.`;
  }
};

module.exports = {
  getNumberProperties,
  getFunFact,
};
