import { cons } from '@hexlet/pairs';
import run from '../engine';
import randomNumber from '../random';

const randomFirst = 0;
const randomLast = 100;
const length = 10;

const gameDescription = 'What number is missing in the progression?';

const buildArithmeticProgression = (start, lengthOfProgression, constStep) => {
  const iter = (firstNumber, lengthForIter, step, acc) => {
    if (lengthForIter === 0) {
      return acc;
    }
    const newAcc = [...acc, firstNumber];
    return iter(firstNumber + step, lengthForIter - 1, step, newAcc);
  };
  return iter(start, lengthOfProgression, constStep, []);
};

const getData = () => {
  const startNumber = randomNumber(randomFirst, randomLast);
  const constantStep = randomNumber(-10, 10);
  const arithmeticProgression = buildArithmeticProgression(startNumber, length, constantStep);
  const hiddenElementIndex = randomNumber(0, arithmeticProgression.length - 1);
  const progression = [...arithmeticProgression.slice(0, hiddenElementIndex), '..', ...arithmeticProgression.slice(hiddenElementIndex + 1)];
  const rightAnswer = arithmeticProgression[hiddenElementIndex].toString();
  const pair = cons(progression.join(' '), rightAnswer);
  return pair;
};

export default () => run(getData, gameDescription);
