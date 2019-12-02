import { cons } from '@hexlet/pairs';
import run from '../engine';

const randomMin = 0;
const randomMax = 100;
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const length = 10;

const gameDescription = 'What number is missing in the progression?';

const buildArithmeticProgression = (start, len, constStep) => {
  const iter = (s, l, c, acc) => {
    if (l === 0) {
      return acc;
    }
    const newAcc = [...acc, s];
    return iter(s + c, l - 1, c, newAcc);
  };
  return iter(start, len, constStep, []);
};

const getData = () => {
  const startNumber = randomNumber(randomMin, randomMax);
  const constantStep = randomNumber(-10, 10);
  const arithmeticProgression = buildArithmeticProgression(startNumber, length, constantStep);
  const hiddenElementIndex = randomNumber(0, arithmeticProgression.length - 1);
  const question = [...arithmeticProgression.slice(0, hiddenElementIndex), '..', ...arithmeticProgression.slice(hiddenElementIndex + 1)];
  const answer = arithmeticProgression[hiddenElementIndex].toString();
  const pair = cons(question.join(' '), answer);
  return pair;
};

export default () => run(getData, gameDescription);
