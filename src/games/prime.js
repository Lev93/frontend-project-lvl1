import { cons } from '@hexlet/pairs';
import run from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const randomMin = -100;
const randomMax = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getData = () => {
  const question = randomNumber(randomMin, randomMax);
  const answer = isPrime(question) ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};
export default () => run(getData, gameDescription);
