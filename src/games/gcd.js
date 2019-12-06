import { cons } from '@hexlet/pairs';
import run from '../engine';
import randomNumber from '../random';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const randomMin = 0;
const randomMax = 100;

const gcd = (x, y) => {
  if (x !== 0) {
    return gcd(y % x, x);
  }
  return y;
};

const getData = () => {
  const num1 = randomNumber(randomMin, randomMax);
  const num2 = randomNumber(randomMin, randomMax);
  const numbers = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2).toString();
  const pair = cons(numbers, rightAnswer);
  return pair;
};
export default () => run(getData, gameDescription);
