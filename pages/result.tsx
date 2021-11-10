import Image from "next/image";
import styled from "styled-components";
import { LinkedButton } from "../components/LinkedButton";

type ResultProps = {
  calculatedTime: number;
  /* Caution: as stated in the app.tsx-file, calculatedTime is a decimal value which still has to be converted 
  for a proper display of minutes or seconds */
};

const Result = ({ calculatedTime }: ResultProps) => {
  const minutes = Math.floor(calculatedTime);
  const seconds = Math.round(
    (calculatedTime - Math.floor(calculatedTime)) * 60
  );
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
        Lesegeschwindigkeit: {minutes} {minutes === 1 ? "Minute" : "Minuten"}{" "}
        und {seconds} {seconds === 1 ? "Sekunde" : "Sekunden"}
      </p>
      <p>Texterinnerung:</p>
      <p>Effektivgeschwindigkeit:</p>
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
