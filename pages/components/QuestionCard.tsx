import styled from "styled-components";

export type QuestionCardProps = {};

export const QuestionCard = () => {
  return (
    <article>
      <h2>Frage 1</h2>
      <p>Um wieviel Uhr ist die Küchenuhr stehen geblieben?</p>
      <ul>
        <li>Antwort 1</li>
        <li>Antwort 2</li>
        <li>Antwort 3</li>
        <li>Antwort 4</li>
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
