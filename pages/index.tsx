import type { NextPage } from "next";

import Header from "../components/header/header";

import Goals from "../sections/goals/goals";
import Features from "../sections/features/features";
import News from "../sections/news/news";

const Home: NextPage = () => {
  return (
    <section>
      <Header />
      <Goals />
      <Features />
      <News />
    </section>
  )
}

export default Home;