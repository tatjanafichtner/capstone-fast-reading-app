import Head from "next/head";
import { LinkedButton } from "../components/LinkedButton";

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
        <h1>Wie schnell kannst du lesen?</h1>
        <p>
          Ein(e) <b>&quot;Schnellleser(in)&quot;</b> verschlingt Bücher und kann
          sich trotzdem noch an Details erinnern. <br /> Eine echte{" "}
          <b>Superpower</b> <br /> <b>Hast du sie auch?</b>
        </p>
        <LinkedButton
          id="start"
          buttonUrl="test"
          content="Mach den Test"
          onClick={() => {
            setStartingTime(Date.now());
          }}
        />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
