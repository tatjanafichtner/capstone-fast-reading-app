import Head from "next/head";
import { LinkedButton } from "../components/LinkedButton";
import styled from "styled-components";
import Image from "next/image";

type HomeProps = {
  setStartingTime: (startingTime: number) => void;
};

const Home = ({ setStartingTime }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>A fast reading test app</title>
        <meta name="description" content="A fast reading test app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Wrapper>
          <Image
            src="/public/pics/bluebook.svg"
            alt="blue open book"
            width={117}
            height={117}
          />
          <h1>Wie schnell kannst du lesen?</h1>
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
            onClick={() => {
              setStartingTime(Date.now());
            }}
          />
          <Image
            src="/pics/bookstack.svg"
            alt="stack of colourful books"
            width={287}
            height={295}
          />
        </Wrapper>
      </main>

      <footer></footer>
    </div>
  );
};

/*
########
STYLING
########
*/

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Home;
