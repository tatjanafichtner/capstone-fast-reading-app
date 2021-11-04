import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
          Ein(e) <b>"Schnellleser(in)"</b> verschlingt Bücher und kann sich
          trotzdem noch an Details erinnern. <br /> Eine echte <b>Superpower</b>{" "}
          <br /> <b>Hast du sie auch?</b>
        </p>
        <button>Mach den Test</button>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
