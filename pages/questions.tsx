import { LinkedButton } from "./components/LinkedButton";
import { QuestionCard } from "./components/QuestionCard";
import quiz from "../assets/quiz.json";

const Questions = () => {
  const renderedCards = quiz.map(({ number, question, answers }) => {
    return (
      <QuestionCard
        key={number}
        number={number}
        question={question}
        answers={answers}
      />
    );
  });
  return (
    <>
      <h1>Wie gut erinnerst du dich?</h1>
      {renderedCards}
      <LinkedButton
        id="Frageseiten-Button"
        buttonUrl="result"
        content="Weiter zum Ergebnis"
      />
    </>
  );
};

export default Questions;
