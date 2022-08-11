import type { NextPage } from "next";

import Header from "../components/header/header";

import Goals from "../sections/goals/goals";
import Features from "../sections/features/features";

const Home: NextPage = () => {
  return (
    <section>
      <Header />
      <Goals />
      <Features />
    </section>
  )
}

export default Home;