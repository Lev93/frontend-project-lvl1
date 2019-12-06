import { cons } from '@hexlet/pairs';
import run from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
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
  const question = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2).toString();
  const pair = cons(question, rightAnswer);
  return pair;
};
export default () => run(getData, gameDescription);
