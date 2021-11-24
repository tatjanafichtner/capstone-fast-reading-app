/*
###########
# IMPORTS #
###########
*/
import styled from "styled-components";
import React from "react";
import Image from "next/image";

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
      <>
        <StyledButton
          key={answer}
          disabled={amountOfAnswers === cardNumber}
          value={answer}
          onClick={onSelectAnswer}
        >
          {answer}
        </StyledButton>
      </>
    );
  });
  // Then we can build the QuestionCards we want to display in the questions.tsx page
  return (
    <StyledCard>
      <TitleContainer>
        <Image
          alt="books in a row"
          className="row-of-books"
          src="/pics/rowofbooks.svg"
          height={40}
          width={40}
        />

        <h2>
          Frage {cardNumber} von {totalQuestions}
        </h2>
      </TitleContainer>
      <p>{question}</p>
      <div>{renderedAnswers}</div>
    </StyledCard>
  );
};

/*
###########
# STYLING # 
###########
*/

/* Neu: Alles ab Zeile 79 */
const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  border-radius: 10px;
  background-color: rgba(250, 236, 156, 0.53);
  padding: 1rem;
  margin: 0;
  min-width: 75vw;
  & h2 {
    margin: 0 !important;
  }
  & p {
    margin: 0.5rem 0 0 0;
  }
  & div {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    width: 50%;
    gap: 0.5rem;
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background: var(--custom-color-blue);
  color: var(--custom-color-grey);
  padding: 0.3rem;
  text-align: left;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  flex-wrap: wrap;
  margin: 0;
`;
