import { cons } from '@hexlet/pairs';
import run from '../engine';
import getRandomNumber from '../random';

const randomMin = 0;
const randomMax = 100;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getData = () => {
  const question = getRandomNumber(randomMin, randomMax);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => run(getData, gameDescription);
