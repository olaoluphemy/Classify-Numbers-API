exports.getPrimeState = function (num) {
  let isPrime = true;

  for (let i = 0; i < num; i++) {
    if (i !== 1 && num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

exports.getPerfectState = function (num) {
  const divisors = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0) divisors.push(i);
  }

  const sum = divisors.reduce((acc, cur) => acc + cur, 0);

  return sum === num;
};

exports.sumDigits = function (num) {
  let sum = 0;

  for (let i = 0; i <= num.length - 1; i++) {
    sum = +num[i] + sum;
  }

  return sum;
};

getArmstrongProp = function (num) {
  const length = num.length;
  const values = [];

  for (let i = 0; i < length; i++) {
    values.push((+num[i]) ** length);
  }

  const sum = values.reduce((acc, cur) => acc + cur, 0);

  return sum === +num;
};

exports.getProperties = function (num) {
  const isArmstrong = getArmstrongProp(num);
  const props = [];

  if (isArmstrong) props.push("armstrong");

  if (+num % 2 === 0) props.push("even");
  if (+num % 2 !== 0) props.push("odd");

  return props;
};
