import Image from "next/image";
import styled from "styled-components";
import { LinkedButton } from "./components/LinkedButton";

type ResultTypes = {
  calculatedTime: number;
  minutes: number;
  seconds: number;
};

const Result = ({ minutes, seconds }: ResultTypes) => {
  return (
    <>
      <h1>Glückwunsch, du bist ein(e) Schnellleser(in)!</h1>
      <StyledImage
        alt="speed reader picture"
        src="/Schnellleser.jpg"
        width={200}
        height={200}
      />
      <p>
        Lesegeschwindigkeit: {minutes} {minutes === 1 ? "Minute" : "Minuten"}{" "}
        und {seconds} {seconds === 1 ? "Sekunde" : "Sekunden"}
      </p>
      <p>Texterinnerung:</p>
      <p>Effektivgeschwindigkeit:</p>
      <LinkedButton
        buttonUrl={""}
        content={"Zurück zum Start"}
        icon={""}
        id={"ButtonResultPage"}
        onClick={undefined}
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
