import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  /**
   * This hook measures the time between push of start and stop button on the pages
   * "Homepage" and "Test". Thus it is called in the app component.
   */

  const [startingTime, setStartingTime] = useState(0);
  const [stoppingTime, setStoppingTime] = useState(0);

  // Time specification in milliseconds, has to be converted into minutes. However, it is still a decimal value
  // which again has to be converted into a proper seconds count when displayed in the result tab.
  const calculatedTime = (stoppingTime - startingTime) / 60000;

  return (
    <Component
      {...pageProps}
      calculatedTime={calculatedTime}
      setStartingTime={setStartingTime}
      setStoppingTime={setStoppingTime}
    />
  );
}

export default MyApp;
