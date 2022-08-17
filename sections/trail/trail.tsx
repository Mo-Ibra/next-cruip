import { AiFillStar } from "react-icons/ai";

import Title from "../../components/title/title";

import { motion } from 'framer-motion';

const Trail = () => {

    const trailVariants = {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }

    return (
        <motion.section
            variants={trailVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container px-10 mx-auto border-b border-gray-800">
                <Title header="Ready to create better products?" hasSpan={false} />
                <div className="text-center">
                    <button className="bg-main text-white p-2 px-4 rounded-sm">Start Free Trail</button>
                    <div className="flex items-center gap-4 my-10 justify-center">
                        <div className="flex items-center gap-2">
                            <AiFillStar className="text-main" />
                            <p className="text-xs md:text-base font-semibold text-color">Free 14-day trial</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillStar className="text-main" />
                            <p className="text-xs md:text-base font-semibold text-color">Free 14-day trial</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillStar className="text-main" />
                            <p className="text-xs md:text-base font-semibold text-color">Free 14-day trial</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Trail;