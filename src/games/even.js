import { cons } from '@hexlet/pairs';
import run from '../engine';

const randomMin = 0;
const randomMax = 100;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';


const getData = () => {
  const question = randomNumber(randomMin, randomMax);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

export default () => run(getData, gameDescription);
