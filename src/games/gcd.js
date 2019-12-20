import { cons } from '@hexlet/pairs';
import run from '../engine';
import getRandomNumber from '../random';

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
  const num1 = getRandomNumber(randomMin, randomMax);
  const num2 = getRandomNumber(randomMin, randomMax);
  const question = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2).toString();
  return cons(question, rightAnswer);
};
export default () => run(getData, gameDescription);
