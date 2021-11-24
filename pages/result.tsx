import Image from "next/image";
import styled from "styled-components";
import { LinkedButton } from "../components/LinkedButton";
import { ButtonIcon } from "../components/ButtonIcon";

type ResultProps = {
  /* Caution: as stated in the app.tsx-file, calculatedTime is a decimal value which still has to be converted 
  for a proper display of minutes or seconds */
  calculatedTime: number;
  score: number;
  countOfQuestions: number;
};

const Result = ({ calculatedTime, score, countOfQuestions }: ResultProps) => {
  // Berechnungen für die Lesegeschwindigkeit
  const minutes = Math.round(calculatedTime) * 60;

  // Berechnungen für die Effektivgeschwindigkeit
  // ... ergibt sich aus Prozentzahl der Lesegeschwindigkeit und
  // ... Prozentzahl der Punktzahl der Texterinnerung

  const readingVelocity = 921 / minutes;
  const textRemembrance = (score * 100) / countOfQuestions;
  const result = (readingVelocity * textRemembrance) / 100;

  /*
  _____________________________________________________________
  Different return statements for slow, medium and fast readers
  _____________________________________________________________
  */

  const minimumValueSpeedReader = 200;
  const minimumValueMediumReader = 100;

  if (result > minimumValueSpeedReader) {
    return (
      <>
        <h1>Glückwunsch, du bist ein(e) Schnellleser(in)!</h1>
        <StyledImage
          alt="speed reader picture"
          src="/pics/Schnellleser.jpg"
          width={300}
          height={300}
        />
        <p>
          Lesegeschwindigkeit:{" "}
          <StyledResult>{readingVelocity ?? 0} Wörter pro Minute</StyledResult>
        </p>
        <p>
          Texterinnerung:{" "}
          <StyledResult>{textRemembrance ?? 0} Prozent</StyledResult>
        </p>
        <p>
          Effektivgeschwindigkeit: <StyledResult>{result ?? 0}</StyledResult>
        </p>
        <LinkedButton
          buttonUrl=""
          content="Zurück zum Start"
          id="ButtonResultPage"
          elementAfter={
            <ButtonIcon
              source={"/pics/return-icon.svg"}
              description={"return icon"}
              width={30}
              height={30}
            />
          }
        />
      </>
    );
  } else if (result > minimumValueMediumReader) {
    return (
      <>
        <h1>
          Dein Lesevermögen ist durchschnittlich. <br />
          Ein ordentliches Ergebnis!
        </h1>
        <StyledImage
          alt="medium reader picture"
          src="/pics/Durchschnittsleser.jpg"
          width={300}
          height={300}
        />
        <p>
          Lesegeschwindigkeit:{" "}
          <StyledResult>{readingVelocity} Wörter pro Minute</StyledResult>
        </p>
        <p>
          Texterinnerung:{" "}
          <StyledResult>{textRemembrance ?? 0} Prozent</StyledResult>
        </p>
        <p>
          Effektivgeschwindigkeit: <StyledResult>{result ?? 0}</StyledResult>
        </p>
        <LinkedButton
          buttonUrl=""
          content="Zurück zum Start"
          id="ButtonResultPage"
          elementAfter={
            <ButtonIcon
              source={"/pics/return-icon.svg"}
              description={"return icon"}
              width={30}
              height={30}
            />
          }
        />
      </>
    );
  } else {
    return (
      <StyledPage>
        <h1>
          Na, da geht noch was! <br /> Du liest langsamer als der Durchschnitt.{" "}
          <br />
        </h1>
        <StyledImage
          alt="slow reader picture"
          src="/pics/LangsamerLeser.jpg"
          width={300}
          height={300}
        />
        <p>
          Lesegeschwindigkeit:{" "}
          <StyledResult>{readingVelocity} Wörter pro Minute</StyledResult>
        </p>
        <p>
          Texterinnerung:{" "}
          <StyledResult>{textRemembrance ?? 0} Prozent</StyledResult>
        </p>
        <p>
          Effektivgeschwindigkeit: <StyledResult>{result ?? 0}</StyledResult>
        </p>
        <p>
          Effektivgeschwindigkeit: <StyledResult> {result ?? 0}</StyledResult>
        </p>
        <LinkedButton
          buttonUrl=""
          content="Zurück zum Start"
          id="ButtonResultPage"
          elementAfter={
            <ButtonIcon
              source={"/pics/return-icon.svg"}
              description={"return icon"}
              width={30}
              height={30}
            />
          }
        />
      </StyledPage>
    );
  }
};

export default Result;

/*
########
STYLING
########
*/

const StyledPage = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const StyledResult = styled.em`
  color: var(--custom-color-green);
  font-style: normal;
`;
