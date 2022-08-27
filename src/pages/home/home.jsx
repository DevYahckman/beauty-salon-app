import React from "react";
import LandingPage from "./LandingPage/landingPage";
import NewsLetter from "./newsLetter/NewsLetter";
import Training from "./training/training";
function Home(props) {
  return (
    <div>
      <LandingPage />
      <NewsLetter />
      <Training />
    </div>
  );
}

export default Home;
