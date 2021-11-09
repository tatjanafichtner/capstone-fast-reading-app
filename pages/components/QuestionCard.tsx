import styled from "styled-components";
import { Quiz } from "quiz.json";

export type QuestionCardProps = {};

export const QuestionCard = () => {
  return (
    <article>
      <h2>Frage {Quiz.number}</h2>
      <p>{Quiz.question}</p>
      <ul>
        <li>{Quiz.answers.answer[0]}</li>
        <li>{Quiz.answers.answer[1]}</li>
        <li>{Quiz.answers.answer[2]}</li>
        <li>{Quiz.answers.answer[3]}</li>
      </ul>
    </article>
  );
};

/*
########
STYLING
########
*/

const StyledCard = styled.article`
  all: unset;
  border-radius: 50;
  background-color: hotpink;
`;
