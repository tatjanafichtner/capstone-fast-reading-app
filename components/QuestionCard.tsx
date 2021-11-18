/*
###########
# IMPORTS #
###########
*/
import styled from "styled-components";
import React from "react";

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
  amountOfAnswers: number;
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
  amountOfAnswers,
}) => {
  // Before we display a single QuestionCard, the array of answers we collect
  // from our JSON file needs to be rendered for every single answer in it.
  const renderedAnswers = answers.map((answer) => {
    return (
      <button
        key={answer}
        disabled={amountOfAnswers === cardNumber}
        value={answer}
        onClick={onSelectAnswer}
      >
        {answer}
      </button>
    );
  });
  // Then we can build the QuestionCards we want to display in the questions.tsx page
  return (
    <StyledCard>
      <h2>
        Frage {cardNumber} von {totalQuestions}
      </h2>
      <p>{question}</p>
      <p>{renderedAnswers}</p>
    </StyledCard>
  );
};

/*
###########
# STYLING # 
###########
*/

const StyledCard = styled.section`
  border-radius: 50;
  background-color: hotpink;
  width: 30vw;
`;
