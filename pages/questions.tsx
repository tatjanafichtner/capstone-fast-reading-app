/*
###########
# IMPORTS #
###########
*/

//Libraries
import { useState } from "react";
//Components
import { LinkedButton } from "../components/LinkedButton";
import { QuestionCard } from "../components/QuestionCard";
//Assets (JSON)
import quiz from "../assets/quiz.json";
//Utils
import { shuffleAnswerArray } from "../utils/shuffle.js";

/*
#########
# TYPES #
#########
*/

// specifies the types of our JSON file for questions and answers
export type QuizInputProps = {
  cardNumber: number;
  question: string;
  answers: any[]; // not true, is it? Could it be more specified?
  correct_answer: string;
  incorrect_answers: string[];
  key: number;
};

// specifies what is returned when a user selects an answer on a QuestionCard
export type AnswerObjectProps = {
  question: string;
  answer: string;
  correctAnswer: boolean;
  correctAnswerName: string;
};

/*
##################
# MAIN QUIZ CODE #
##################
*/

const TOTAL_QUESTIONS = quiz.length; // don't know why I need to use capital letters here?

export const randomizedAnswers = ({ answers }: QuizInputProps) => {
  shuffleAnswerArray([...answers.incorrect_answers, answers.correct_answer]);
};

/* 
_____________________________
This is where the quiz starts
_____________________________
*/
const QuizPage = () => {
  /* 
  _____________
  Hooks needed
  _____________
  */
  const [questions, setQuestions] = useState([]);
  const [cardNumber, setCardNumber] = useState(1);
  const [amountOfUserAnswers, setAmountOfUserAnswers] = useState<
    AnswerObject[]
  >([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  /*
  __________________
  Starting function
  __________________
  */
  const startQuiz = ({ question }: AnswerObjectProps) => {
    setGameOver(false);
    const newQuestion = [...(question + randomizedAnswers)];
    setQuestions(newQuestion);
    setScore(0);
    setAmountOfUserAnswers([]);
    setCardNumber(0);
  };

  /*
  _______________________________
  Check & saving of user answers
  _______________________________
  */
  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Find out which answer the user has selected
      const answerSelected = event.currentTarget.value;
      // Check if it is the right answer
      const isCorrect =
        questions[cardNumber - 1].correct_answer === answerSelected;
      if (isCorrect) {
        setScore((previous) => previous + 1);
      }
      // Save answer in the array for user answers
      const answerObject = {
        questions: questions[cardNumber - 1].question,
        answerSelected,
        isCorrect,
        correctAnswer: questions[cardNumber - 1].correct_answer,
      };
      setAmountOfUserAnswers((previous) => [...previous, answerObject]);
    }
  };

  /*
  _________________________
  Turning of QuestionCards
  _________________________
  */
  const showNextQuestion = () => {
    const nextQuestion = cardNumber;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setCardNumber(nextQuestion + 1);
    }
  };

  /*
  __________________________________________
  Building of single rendered QuestionCards
  __________________________________________
  */
  const renderedCards = quiz.map(({ cardNumber, question }) => {
    return (
      <QuestionCard
        key={cardNumber}
        cardNumber={cardNumber}
        totalQuestions={TOTAL_QUESTIONS}
        question={question}
        answers={randomizedAnswers}
        amountOfUserAnswers={
          amountOfUserAnswers ? amountOfUserAnswers[cardNumber - 1] : undefined
        }
        callback={checkAnswer}
      />
    );
  });

  /*
  _______________________________________________________________________________________
  Return statement of whole Quiz page with conditional display of buttons, score & cards
  _______________________________________________________________________________________
  */
  return (
    <>
      <h1>Wie gut erinnerst du dich?</h1>

      {gameOver || amountOfUserAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startQuiz}>Quiz starten</button>
      ) : null}

      {!gameOver ? <p>Punktzahl: {score}</p> : null}

      {!gameOver ? { renderedCards } : null}

      {!gameOver &&
      amountOfUserAnswers.length === cardNumber &&
      cardNumber !== TOTAL_QUESTIONS - 1 ? (
        <button onClick={showNextQuestion}>Nächste Frage</button>
      ) : null}

      <LinkedButton
        id="Frageseiten-Button"
        buttonUrl="result"
        content="Weiter zum Ergebnis"
      />
    </>
  );
};

export default QuizPage;
