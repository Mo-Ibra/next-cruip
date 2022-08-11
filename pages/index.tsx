import type { NextPage } from "next";

import Header from "../components/header/header";

import Goals from "../sections/goals/goals";

const Home: NextPage = () => {
  return (
    <section>
      <Header />
      <Goals />
    </section>
  )
}

export default Home;