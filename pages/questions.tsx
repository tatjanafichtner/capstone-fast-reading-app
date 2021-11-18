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
  correct_answer: string;
  incorrect_answers: string[];
};

type Question = QuizInputProps & { answers: string[] };
type Score = {
  score: number;
  setScore: (score: number) => void;
};

// specifies what is returned when a user selects an answer on a QuestionCard
export type UserAnswer = {
  question: string;
  correctAnswer: string;
  isCorrect: boolean;
  answerSelected: string;
};

export type QuestionCard = {
  cardNumber: number;
  question: string;
  TOTAL_QUESTIONS: number;
  answers: string[];
  score: number;
};

/*
##################
# MAIN QUIZ CODE #
##################
*/

export const TOTAL_QUESTIONS = quiz.length; // don't know why I need to use capital letters here?

export const randomizedAnswers = (
  correct_answer: string,
  incorrect_answers: string[]
) => {
  return shuffleAnswerArray([...incorrect_answers, correct_answer]) as string[];
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
  const [questions, setQuestions] = useState<Question[]>([]);
  const [cardNumber, setCardNumber] = useState(1);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  /*
  __________________
  Starting function
  __________________
  */
  const startQuiz = () => {
    setGameOver(false);
    const newQuestions = quiz.map((question) => {
      return {
        ...question,
        answers: randomizedAnswers(
          question.correct_answer,
          question.incorrect_answers
        ),
      };
    });
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
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
        question: questions[cardNumber - 1].question,
        answerSelected,
        isCorrect,
        correctAnswer: questions[cardNumber - 1].correct_answer,
      };
      setUserAnswers((previous) => [...previous, answerObject]);
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
  const renderedCards = questions.map(
    //habe type QuestionCard definiert, kann ihn hier nicht einbinden?
    ({ cardNumber, question, TOTAL_QUESTIONS, answers, score }) => {
      return (
        <QuestionCard
          key={cardNumber}
          cardNumber={cardNumber}
          totalQuestions={TOTAL_QUESTIONS}
          question={question}
          answers={answers}
          // userScore={score}      // Wie bekomme ich den User Score??
          // amountOfUserAnswers={
          //   userAnswers ? userAnswers[cardNumber - 1] : undefined
          // }
          onSelectAnswer={checkAnswer}
        />
      );
    }
  );

  /*
  _______________________________________________________________________________________
  Return statement of whole Quiz page with conditional display of buttons, score & cards
  _______________________________________________________________________________________
  */
  return (
    <>
      <h1>Wie gut erinnerst du dich?</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startQuiz}>Quiz starten</button>
      ) : null}

      {!gameOver ? <p>Punktzahl: {score}</p> : null}

      {!gameOver ? renderedCards[cardNumber - 1] : null}

      {!gameOver &&
      userAnswers.length === cardNumber &&
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
