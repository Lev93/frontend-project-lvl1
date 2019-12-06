import { cons } from '@hexlet/pairs';
import run from '../engine';
import randomNumber from '../random';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomMin = -100;
const randomMax = 100;

const isPrime = (number) => {
  if (number < 2 || (number % 2 === 0 && number !== 2)) {
    return false;
  }
  const max = Math.round(Math.sqrt(number)) + 1;

  for (let i = 3; i < max; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getData = () => {
  const number = randomNumber(randomMin, randomMax);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const pair = cons(number, rightAnswer);
  return pair;
};
export default () => run(getData, gameDescription);
