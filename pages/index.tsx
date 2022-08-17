import type { NextPage } from "next";

import Header from "../components/header/header";

import Goals from "../sections/goals/goals";
import Features from "../sections/features/features";
import News from "../sections/news/news";
import Trail from "../sections/trail/trail";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Goals />
      <Features />
      <News />
      <Trail />
      <Footer />
    </>
  )
}

export default Home;