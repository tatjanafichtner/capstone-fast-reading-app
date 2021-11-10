import Image from "next/image";
import styled from "styled-components";
import { LinkedButton } from "../components/LinkedButton";
import QuizPage from "./questions";

type ResultProps = {
  calculatedTime: number;
  /* Caution: as stated in the app.tsx-file, calculatedTime is a decimal value which still has to be converted 
  for a proper display of minutes or seconds */
};

const Result = ({ calculatedTime }: ResultProps) => {
  // Berechnungen für die Lesegeschwindigkeit
  const minutes = Math.floor(calculatedTime);
  const seconds = Math.round(
    (calculatedTime - Math.floor(calculatedTime)) * 60
  );

  // Berechnungen für die Effektivgeschwindigkeit
  // ... ergibt sich aus Prozentzahl der Lesegeschwindigkeit und
  // ... Prozentzahl der Punktzahl der Texterinnerung

  const readingPerformanceResult = () => {
    const readingVelocity = null; // tatsächliches Ergebnis geteilt durch Maximalwert
    const textRemembrance = score / TOTAL_Questions; // Prozentzahl der richtigen Antworten
    const result = (readingVelocity + textRemembrance) * 0.5;
    return result;
  };

  return (
    <>
      <h1>Glückwunsch, du bist ein(e) Schnellleser(in)!</h1>
      <StyledImage
        alt="speed reader picture"
        src="/public/Schnellleser.jpg"
        width={200}
        height={200}
      />
      <p>
        Lesegeschwindigkeit: {minutes ? 0} {minutes === 1 ? "Minute" : "Minuten"}{" "}
        und {seconds ? 0} {seconds === 1 ? "Sekunde" : "Sekunden"}
      </p>
      <p>
        Texterinnerung: {score ? 0} von {TOTAL_QUESTIONS}{" "}
      </p>
      <p>Effektivgeschwindigkeit: {readingPerformanceResult ? 0}</p>
      <LinkedButton
        buttonUrl=""
        content="Zurück zum Start"
        id="ButtonResultPage"
      />
    </>
  );
};

export default Result;

/*
########
STYLING
########
*/

const StyledImage = styled(Image)`
  border-radius: 100px;
`;
