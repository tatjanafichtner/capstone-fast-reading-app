import Image from "next/image";
import styled from "styled-components";
import { LinkedButton } from "../components/LinkedButton";
import { ButtonIcon } from "../components/ButtonIcon";
import ConfettiGenerator from "confetti-js";
import { MutableRefObject, useEffect, useRef } from "react";

type ResultProps = {
  calculatedTime: number;
  score: number;
  countOfQuestions: number;
};

const Result = ({ calculatedTime, score, countOfQuestions }: ResultProps) => {
  const readingVelocity = (921 / calculatedTime).toFixed(0);
  const textRemembrance = (score * 100) / countOfQuestions;
  const result = (readingVelocity * textRemembrance) / 100;

  /*
  _____________________________________________________________
  Different return statements for slow, medium and fast readers
  _____________________________________________________________
  */

  const minimumValueSpeedReader = 200;
  const minimumValueMediumReader = 100;

  const isSuccessful = true;

  const canvasRef = useRef<MutableRefObject<HTMLCanvasElement>>();

  useEffect(() => {
    if (isSuccessful) {
      const confettiSettings = { target: canvasRef.current };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();

      return () => confetti.clear();
    }
  }, [isSuccessful]);

  if (isSuccessful) {
    return (
      <>
        <StyledCanvas ref={canvasRef as any} />
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
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const StyledResult = styled.em`
  color: var(--custom-color-green);
  font-style: normal;
`;

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  pointer-events: none;
`;
