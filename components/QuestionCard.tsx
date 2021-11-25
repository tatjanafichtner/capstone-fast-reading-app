import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { UserAnswer } from "../pages/questions";

export type QuestionCardProps = {
  cardNumber: number;
  question: string;
  answers: string[];
  onSelectAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
  totalQuestions: number;
  amountOfAnswers: number;
  userAnswer?: UserAnswer;
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  cardNumber,
  question,
  answers,
  onSelectAnswer,
  totalQuestions,
  amountOfAnswers,
  userAnswer,
}) => {
  console.log("userAnswer ", userAnswer);

  const renderedAnswers = answers.map((answer) => {
    return (
      <>
        <StyledButton
          key={cardNumber}
          disabled={amountOfAnswers === cardNumber}
          value={answer}
          onClick={onSelectAnswer}
          className={
            answer === userAnswer?.correctAnswer
              ? "animate__animated animate__flash"
              : ""
          }
          showAsCorrect={answer === userAnswer?.correctAnswer}
          showAsSelected={answer === userAnswer?.answerSelected}
        >
          {answer}
        </StyledButton>
      </>
    );
  });
  return (
    <StyledCard className="animate__animated animate__backInRight">
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

const StyledCard = styled.article`
  margin: 1rem;
  padding: 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  border-radius: 10px;
  background-color: rgba(250, 236, 156, 0.53);
  width: fit-content;
  text-align: left;
  justify-content: left;
  float: left;
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

const StyledButton = styled.button<{
  showAsCorrect: boolean;
  showAsSelected: boolean;
}>`
  float: left;
  border: none;
  border-radius: 10px;
  background: ${(props) =>
    props.showAsCorrect
      ? "var(--custom-color-green)"
      : props.showAsSelected
      ? "var(--custom-color-orange)"
      : "var(--custom-color-blue)"};
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
