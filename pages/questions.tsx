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
import styled from "styled-components";

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

//specifies the array of questions and randomized answers of every started Quiz
type Question = QuizInputProps & { answers: string[] };

// specifies what is returned when a user selects an answer on a QuestionCard
export type UserAnswer = {
  question: string;
  correctAnswer: string;
  isCorrect: boolean;
  answerSelected: string;
};

export type QuizPageProps = {
  score: number;
  addOneToScore: () => void;
  resetScore: () => void;
  setCountOfQuestions: (countOfQuestions: number) => void;
};

/*
##################
# MAIN QUIZ CODE #
##################
*/

/* 
_____________
Preparations
_____________
*/

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

const QuizPage = ({
  score,
  addOneToScore,
  resetScore,
  setCountOfQuestions,
}: QuizPageProps) => {
  /* 
  _____________
  Hooks needed
  _____________
  */
  const [questions, setQuestions] = useState<Question[]>([]);
  const [cardNumber, setCardNumber] = useState(1);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
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
    setCountOfQuestions(newQuestions.length);
    resetScore();
    setUserAnswers([]);
    setCardNumber(1);
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
        addOneToScore();
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
    if (nextQuestion === questions.length) {
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
  const renderedCards = questions.map(({ cardNumber, question, answers }) => {
    return (
      <QuestionCard
        key={cardNumber}
        cardNumber={cardNumber}
        totalQuestions={questions.length}
        question={question}
        answers={answers}
        amountOfAnswers={userAnswers.length}
        // userScore={score}      // Wie bekomme ich den User Score??
        // amountOfUserAnswers={
        //   userAnswers ? userAnswers[cardNumber - 1] : undefined
        // }
        onSelectAnswer={checkAnswer}
      />
    );
  });

  /*
  _______________________________________________________________________________________
  Return statement of whole Quiz page with conditional display of buttons, score & cards
  _______________________________________________________________________________________
  */
  return (
    <Wrapper1 data-BrokenWrapper="Quiz-Page-Wrapper">
      <h1>Wie gut erinnerst du dich?</h1>
      {questions.length === 0 ? (
        <button onClick={startQuiz}>Quiz starten</button>
      ) : null}
      {!gameOver ? <p>Punktzahl: {score}</p> : null}
      {!gameOver ? renderedCards[cardNumber - 1] : null}
      {!gameOver &&
      userAnswers.length === cardNumber &&
      cardNumber !== questions.length ? (
        <button onClick={showNextQuestion}>Nächste Frage</button>
      ) : null}
      {userAnswers.length === questions.length && userAnswers.length !== 0 ? (
        <LinkedButton
          id="Frageseiten-Button"
          buttonUrl="result"
          content="Weiter zum Ergebnis"
        />
      ) : null}
    </Wrapper1>
  );
};

const Wrapper1 = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 5px dotted green;
`;

export default QuizPage;
