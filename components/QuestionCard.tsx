import styled from "styled-components";

export type QuestionCardProps = {
  number: number;
  question: string;
  answers: { answer: string; isTrue: boolean; key: number }[];
};

export const QuestionCard = ({
  number,
  question,
  answers,
}: QuestionCardProps) => {
  const renderedAnswers = answers.map(({ answer, isTrue, key }) => {
    return <li key={key}>{answer}</li>;
  });
  return (
    <article>
      <h2>Frage {number}</h2>
      <p>{question}</p>
      <ul>{renderedAnswers}</ul>
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
