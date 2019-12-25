import { cons } from '@hexlet/pairs';
import run from '../engine';
import getRandomNumber from '../random';

const gameDescription = 'What is the result of the expression?';
const randomMin = 0;
const randomMax = 100;
const mathOperations = ['+', '-', '*', '/'];

const calculate = (num1, operator, num2) => {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = (num1 / num2) === 'Infinity' ? 0 : (num1 / num2);
      break;
    default:
      return null;
  }
  return result;
};

const getData = () => {
  const mathOperation = mathOperations[getRandomNumber(randomMin, mathOperations.length - 1)];
  const a = getRandomNumber(randomMin, randomMax);
  const b = getRandomNumber(randomMin, randomMax);
  const question = `${a} ${mathOperation} ${b}`;
  const rightAnswer = calculate(a, mathOperation, b).toString();
  return cons(question, rightAnswer);
};
export default () => run(getData, gameDescription);
