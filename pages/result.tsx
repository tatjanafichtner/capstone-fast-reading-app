import Image from "next/image";
import styled from "styled-components";
import { LinkedButton } from "../components/LinkedButton";

type ResultProps = {
  /* Caution: as stated in the app.tsx-file, calculatedTime is a decimal value which still has to be converted 
  for a proper display of minutes or seconds */
  calculatedTime: number;
  score: number;
  countOfQuestions: number;
};

const Result = ({ calculatedTime, score, countOfQuestions }: ResultProps) => {
  // Berechnungen für die Lesegeschwindigkeit
  const minutes = Math.floor(calculatedTime);
  const seconds = Math.round(
    (calculatedTime - Math.floor(calculatedTime)) * 60
  );

  // Berechnungen für die Effektivgeschwindigkeit
  // ... ergibt sich aus Prozentzahl der Lesegeschwindigkeit und
  // ... Prozentzahl der Punktzahl der Texterinnerung

  const readingPerformanceResult = () => {
    const readingVelocity = calculatedTime / 100; // tatsächliches Ergebnis geteilt durch Maximalwert (100 ist Platzhalter!)
    const textRemembrance = score / countOfQuestions; // Prozentzahl der richtigen Antworten
    const result = (readingVelocity + textRemembrance) * 0.5;
    return result;
  };

  /*
  _____________________________________________________________
  Different return statements for slow, medium and fast readers
  _____________________________________________________________
  */

  const minimumValueSpeedReader = 80; // TO BE DEFINED!
  const minimumValueMediumReader = 20; // TO BE DEFINED!

  if (readingPerformanceResult() > minimumValueSpeedReader) {
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
          Lesegeschwindigkeit: {minutes ?? 0}{" "}
          {minutes === 1 ? "Minute" : "Minuten"} und {seconds ?? 0}{" "}
          {seconds === 1 ? "Sekunde" : "Sekunden"}
        </p>
        <p>
          Texterinnerung: {score ?? 0} von {countOfQuestions}{" "}
        </p>
        <p>Effektivgeschwindigkeit: {readingPerformanceResult() ?? 0}</p>
        <LinkedButton
          buttonUrl=""
          content="Zurück zum Start"
          id="ButtonResultPage"
        />
      </>
    );
  } else if (readingPerformanceResult() > minimumValueMediumReader) {
    return (
      <>
        <h1>
          Dein Lesevermögen ist durchschnittlich. <br />
          Ein ordentliches Ergebnis!
        </h1>
        <StyledImage
          alt="medium reader picture"
          src="/pics/Durchschnittsleser.jpg"
          width={200}
          height={200}
        />
        <p>
          Lesegeschwindigkeit: {minutes ?? 0}{" "}
          {minutes === 1 ? "Minute" : "Minuten"} und {seconds ?? 0}{" "}
          {seconds === 1 ? "Sekunde" : "Sekunden"}
        </p>
        <p>
          Texterinnerung: {score ?? 0} von {countOfQuestions}{" "}
        </p>
        <p>Effektivgeschwindigkeit: {readingPerformanceResult ?? 0}</p>
        <LinkedButton
          buttonUrl=""
          content="Zurück zum Start"
          id="ButtonResultPage"
        />
      </>
    );
  } else {
    return (
      <>
        <h1>
          Na, da geht noch was! <br />
          Weiter so, und du schaffst die Durchschnittsgeschwindigkeit.
        </h1>
        <StyledImage
          alt="slow reader picture"
          src="/pics/LangsamerLeser.jpg"
          width={200}
          height={200}
        />
        <p>
          Lesegeschwindigkeit:{" "}
          <StyledResult>
            {minutes ?? 0} {minutes === 1 ? "Minute" : "Minuten"} und{" "}
            {seconds ?? 0} {seconds === 1 ? "Sekunde" : "Sekunden"}{" "}
          </StyledResult>
        </p>
        <p>
          Texterinnerung:{" "}
          <StyledResult>
            {" "}
            {score ?? 0} von {countOfQuestions}{" "}
          </StyledResult>
        </p>
        <p>
          Effektivgeschwindigkeit:{" "}
          <StyledResult> {readingPerformanceResult ?? 0}</StyledResult>
        </p>
        <LinkedButton
          buttonUrl=""
          content="Zurück zum Start"
          id="ButtonResultPage"
        />
      </>
    );
  }
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

const StyledResult = styled.em`
  color: var(--custom-color-green);
  font-style: normal;
`;
