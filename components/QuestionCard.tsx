/*
###########
# IMPORTS #
###########
*/
import styled from "styled-components";
import React from "react";
import { AnswerObject } from "../pages/questions";
import { randomizedAnswers } from "../pages/questions";

/*
#########
# TYPES #
#########
*/

export type QuestionCardProps = {
  cardNumber: number;
  question: string;
  answers: { correct_answer: string; incorrect_answers: string[] }[];
  //types from video
  randomizedAnswers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  answerSelected: AnswerObject | undefined;
  totalQuestions: number;
};

/*
######################
# QUESTION CARD CODE #
######################
*/

export const QuestionCard: React.FC<QuestionCardProps> = ({
  cardNumber,
  question,
  answers,
  randomizedAnswers,
  callback,
  answerSelected,
  totalQuestions,
}) => {
  // Before we display a single QuestionCard, the array of answers we collect
  // from our JSON file needs to be rendered for every single answer in it.
  const renderedAnswers = randomizedAnswers.map(
    ({ answer, answerSelected }) => {
      return (
        <button
          key={answer}
          disabled={answerSelected ? true : false}
          value={answer}
          onClick={callback}
        >
          {answer}
        </button>
      );
    }
  );
  // Then we can build the QuestionCards we want to display in the questions.tsx page
  return (
    <article>
      <h2>
        Frage {cardNumber} von {totalQuestions}
      </h2>
      <p>{question}</p>
      <p>{renderedAnswers}</p>
    </article>
  );
};

/*
###########
# STYLING # 
###########
*/

const StyledCard = styled.article`
  all: unset;
  border-radius: 50;
  background-color: hotpink;
`;
