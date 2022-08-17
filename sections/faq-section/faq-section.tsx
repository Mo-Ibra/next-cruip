import RightSvg from "../../components/header/svg/right-svg";

import { motion } from 'framer-motion';

const FaqSection = () => {

    const faqVariants = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }

    return (
        <section className="py-5 relative">
            <div className="container mx-auto px-10 border-b border-gray-800 pb-10">
                <div className="grid grid-cols-3 gap-4">
                    <div className="my-10 hidden md:block">
                        <h3 className="mb-2 header-color font-bold text-2xl">Choose a category</h3>
                        <ul>
                            <li className="text-color my-4 cursor-pointer">Frequently Asked Questions</li>
                            <li className="text-color my-4 cursor-pointer">What is Open PRO</li>
                            <li className="text-color my-4 cursor-pointer">Open PRO plan’s features</li>
                            <li className="text-color my-4 cursor-pointer">Get started</li>
                            <li className="text-color my-4 cursor-pointer">Payments FAQ’s</li>
                        </ul>
                    </div>
                    <motion.div
                        className="lg:col-span-2 col-span-3"
                        variants={faqVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="my-10">
                            <h2 className="header-color font-bold text-4xl my-2">FAQ’s – Frequently Asked Questions</h2>
                            <p className="text-color">Last updated - <span className="text-main">June 30, 2020</span></p>
                        </div>
                        <div className="my-10">
                            <h3 className="header-color font-bold text-2xl my-2">How can I use Open PRO without registration?</h3>
                            <p className="text-color">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis enim lobortis scelerisque fermentum.
                            </p>
                        </div>
                        <div className="my-10">
                            <h3 className="header-color font-bold text-2xl my-2">Can I import my sitemap to Open PRO?</h3>
                            <p className="text-color">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis enim lobortis scelerisque fermentum.
                            </p>
                        </div>
                        <div className="my-10">
                            <h3 className="header-color font-bold text-2xl my-2">How can I switch my subscription between essential, and premium plans?</h3>
                            <p className="text-color">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis enim lobortis scelerisque fermentum.
                            </p>
                        </div>
                        <div className="my-10">
                            <h3 className="header-color font-bold text-2xl my-2">Can I cancel my subscription at any time?</h3>
                            <p className="text-color">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis enim lobortis scelerisque fermentum.
                            </p>
                        </div>
                        <div className="my-10">
                            <h3 className="header-color font-bold text-2xl my-2">Is there an additional discount when paid annually?</h3>
                            <p className="text-color">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis enim lobortis scelerisque fermentum.
                            </p>
                        </div>
                        <div className="my-10">
                            <h3 className="header-color font-bold text-2xl my-2">What happens if I don’t renew my license after one year?</h3>
                            <p className="text-color">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Quis enim lobortis scelerisque fermentum.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute top-0 right-0">
                <RightSvg />
            </div>
        </section>
    )
}

export default FaqSection;