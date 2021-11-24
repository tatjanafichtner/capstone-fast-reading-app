import Head from "next/head";
import { LinkedButton } from "../components/LinkedButton";
import styled from "styled-components";
import Image from "next/image";
import { ButtonIcon } from "../components/ButtonIcon";

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
        <Wrapper>
          <FlyingBook>
            <Image
              src="/pics/bluebook.svg"
              alt="blue open book"
              className="flying-book"
              width={117}
              height={117}
            />
          </FlyingBook>
          <h1>
            Wie schnell <br /> kannst du lesen?
          </h1>
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
          <BookStack>
            <Image
              src="/pics/bookstack.svg"
              alt="stack of colourful books"
              className="book-stack"
              width={287}
              height={295}
            />
          </BookStack>
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
  padding: 1rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FlyingBook = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
`;

const BookStack = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
`;

export default Home;
