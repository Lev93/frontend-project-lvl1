import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const attemptsCount = 3;

const run = (getData, gameDescription) => {
  const greeting = 'Welcome to Brain Games!';
  console.log(`${greeting}`);
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);

  const getResultGame = (counter) => {
    if (counter === 0) {
      console.log(`${'Congratulations, '}${name}!`);
      return;
    }

    const questionPair = getData();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`${"Let's try again, "}${name}!`);
      return;
    }
    console.log('Correct!');
    getResultGame(counter - 1);
  };
  return getResultGame(attemptsCount);
};
export default run;
