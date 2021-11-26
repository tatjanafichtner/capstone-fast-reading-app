import Head from "next/head";
import { LinkedButton } from "../components/LinkedButton";
import styled from "styled-components";
import Image from "next/image";
import { ButtonIcon } from "../components/ButtonIcon";
import { FlyingBook } from "../components/FlyingBook";

type HomeProps = {
  setStartingTime: (startingTime: number) => void;
};

const Home = ({ setStartingTime }: HomeProps) => {
  return (
    <>
      <Head>
        <title>A fast reading test app</title>
        <meta name="description" content="A fast reading test app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FlyingBook
          imgLocation="left"
          description="blue open book on the left side"
          imageWidth={100}
          imageHeight={100}
          top={100}
        />
        <FlyingBook
          imgLocation="right"
          description="blue open book on the right side"
          imageWidth={100}
          imageHeight={100}
        />
        <BookStack>
          <Image
            src="/pics/bookstack.svg"
            alt="stack of colourful books"
            className="book-stack"
            width={287}
            height={295}
          />
        </BookStack>

        <Wrapper>
          <h1>
            Wie schnell <br /> kannst du lesen?
          </h1>
          <br />
          <p>
            Ein(e) <b>&quot;Schnellleser(in)&quot;</b> verschlingt Bücher <br />
            und kann sich trotzdem noch an Details erinnern. <br /> Eine echte{" "}
            <b>Superpower</b> <br /> <br /> <b>Hast du sie auch?</b> <br />{" "}
            <br />
          </p>
          <LinkedButton
            id="start"
            buttonUrl="test"
            content="Mach den Test"
            elementBefore={
              <ButtonIcon
                source={"/pics/forward-icon.svg"}
                description={"forward icon"}
                width={30}
                height={30}
              />
            }
            onClick={() => {
              setStartingTime(Date.now());
            }}
          />
        </Wrapper>
      </main>
    </>
  );
};

/*
########
STYLING
########
*/

const Wrapper = styled.div`
  isolation: isolate;

  padding: 1rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    backdrop-filter: blur(5px);
    border-radius: 25px;
  }
  p {
    backdrop-filter: blur(5px);
    border-radius: 25px;
  }
`;

const BookStack = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
`;

export default Home;
