/*
###########
# IMPORTS #
###########
*/
import styled from "styled-components";
import React from "react";
import { randomizedAnswers } from "../pages/questions";

/*
#########
# TYPES #
#########
*/

export type QuestionCardProps = {
  cardNumber: number;
  question: string;
  answers: string[];
  onSelectAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  onSelectAnswer,
  totalQuestions,
}) => {
  // Before we display a single QuestionCard, the array of answers we collect
  // from our JSON file needs to be rendered for every single answer in it.
  const renderedAnswers = answers.map((answer) => {
    return (
      <button
        key={answer}
        disabled={false}
        value={answer}
        onClick={onSelectAnswer}
      >
        {answer}
      </button>
    );
  });
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
