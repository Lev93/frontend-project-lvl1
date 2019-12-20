import { cons } from '@hexlet/pairs';
import run from '../engine';
import getRandomNumber from '../random';

const randomMin = 0;
const randomMax = 100;
const length = 10;

const gameDescription = 'What number is missing in the progression?';

const buildArithmeticProgression = (start, lengthOfProgression, diff) => {
  let progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression = [...progression, start + diff * i];
  }

  return progression;
};

const getData = () => {
  const startNumber = getRandomNumber(randomMin, randomMax);
  const diff = getRandomNumber(1, 9);
  const arithmeticProgression = buildArithmeticProgression(startNumber, length, diff);
  const hiddenElementIndex = getRandomNumber(0, arithmeticProgression.length - 1);
  const question = [...arithmeticProgression.slice(0, hiddenElementIndex), '..', ...arithmeticProgression.slice(hiddenElementIndex + 1)];
  const rightAnswer = arithmeticProgression[hiddenElementIndex].toString();
  return cons(question.join(' '), rightAnswer);
};

export default () => run(getData, gameDescription);
