const superagent = require("superagent");

exports.getFunFact = async function (query) {
  const res = await superagent
    .get(`http://numbersapi.com/${+query}/math`)
    .type("text/plain");

  return res.text;
};

getPrimeState = function (num) {
  if (num === 0) return false;

  let isPrime = true;

  for (let i = 0; i < num; i++) {
    if (i !== 1 && num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

getPerfectState = function (num) {
  if (num === 0) return false;

  const divisors = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0) divisors.push(i);
  }

  const sum = divisors.reduce((acc, cur) => acc + cur, 0);

  return sum === num;
};

sumDigits = function (num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum = +num[i] + sum;
  }

  return sum;
};

getArmstrongProp = function (num) {
  const parsedNum = String(+num);
  const length = parsedNum.length;
  const values = [];

  for (let i = 0; i < length; i++) {
    values.push((+parsedNum[i]) ** length);
  }

  const sum = values.reduce((acc, cur) => acc + cur, 0);

  return sum === +parsedNum;
};

getProperties = function (num) {
  const isArmstrong = getArmstrongProp(num);
  const props = [];

  if (isArmstrong) props.push("armstrong");

  if (+num % 2 === 0) props.push("even");
  if (+num % 2 !== 0) props.push("odd");

  return props;
};

exports.getNumberProperties = function (num) {
  const is_prime = getPrimeState(+num);
  const is_perfect = getPerfectState(+num);
  const digit_sum = sumDigits(num);
  const prop = getProperties(num);

  return { is_prime, is_perfect, properties: prop, digit_sum };
};
