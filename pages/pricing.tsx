import { NextPage } from "next";

import PricingSection from "../sections/pricing/pricing";
import Faq from "../sections/faq/faq";
import Trail from "../sections/trail/trail";
import Testimonials from "../sections/testimonials/Testimonials";

import Footer from "../components/footer/Footer";

const Pricing: NextPage = () => {
    return (
        <>
            <PricingSection />
            <Faq />
            <Trail />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Pricing;