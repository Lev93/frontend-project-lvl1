import { cons } from '@hexlet/pairs';
import run from '../engine';
import randomNumber from '../random';

const randomMin = 0;
const randomMax = 100;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const even = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getData = () => {
  const number = randomNumber(randomMin, randomMax);
  const rightAnswer = even(number);
  const pair = cons(number, rightAnswer);
  return pair;
};

export default () => run(getData, gameDescription);
