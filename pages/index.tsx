import type { NextPage } from "next";

import Header from "../components/header/header";

import Goals from "../sections/goals/goals";
import Features from "../sections/features/features";
import News from "../sections/news/news";
import Trail from "../sections/trail/trail";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Goals />
      <Features />
      <News />
      <Trail />
    </>
  )
}

export default Home;