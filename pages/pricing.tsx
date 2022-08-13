import { NextPage } from "next";

import PricingSection from "../sections/pricing/pricing";
import Faq from "../sections/faq/faq";
import Trail from "../sections/trail/trail";
import Footer from "../components/footer/Footer";

const Pricing: NextPage = () => {
    return (
        <>
            <PricingSection />
            <Faq />
            <Trail />
            <Footer />
        </>
    )
}

export default Pricing;