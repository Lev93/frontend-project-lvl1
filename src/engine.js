import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const attemptsCount = 3;

const processGamePlay = (counter, data) => {
  const n = counter;
  if (n === 0) {
    return true;
  }

  const questionPair = data();
  const question = car(questionPair);
  const correctAnswer = cdr(questionPair);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return false;
  }
  console.log('Correct!');
  return processGamePlay(n - 1, data);
};

const run = (data, gameDescription) => {
  const greeting = 'Welcome to Brain Games!';
  console.log(`${greeting}`);
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  console.log(
    `${
      processGamePlay(attemptsCount, data) ? 'Congratulations, ' : "Let's try again, "
    }${name}!`,
  );
};
export default run;
