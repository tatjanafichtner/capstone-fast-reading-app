import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  /**
   * This hook measures the time between push of start and stop button on the pages
   * "Homepage" and "Test". Thus it is called in the app component.
   */

  const [startingTime, setStartingTime] = useState(0);
  const [stoppingTime, setStoppingTime] = useState(0);
  const [countOfQuestions, setCountOfQuestions] = useState(0);
  const [animation, setAnimation] = useState("");

  const [score, setScore] = useState(0);

  const addOneToScore = () => {
    setScore((previous) => previous + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  // Time specification in milliseconds, has to be converted into minutes. However, it is still a decimal value
  // which again has to be converted into a proper seconds count when displayed in the result tab.
  const calculatedTime = (stoppingTime - startingTime) / 60000;

  return (
    <Component
      {...pageProps}
      calculatedTime={calculatedTime}
      setStartingTime={setStartingTime}
      setStoppingTime={setStoppingTime}
      score={score}
      addOneToScore={addOneToScore}
      resetScore={resetScore}
      countOfQuestions={countOfQuestions}
      setCountOfQuestions={setCountOfQuestions}
      animation={animation}
      setAnimation={setAnimation}
    />
  );
};

export default MyApp;
