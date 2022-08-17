import RightSvg from "../../header/svg/right-svg";
import Title from "../../title/title";

import { motion } from 'framer-motion';

const ContactForm = () => {

    const formVariants = {
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
        <motion.div
            className="py-5 relative"
            variants={formVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-10">
                <Title header="How can we help you?" hasSpan={false} />
                <form className="w-full md:w-3/4 lg:w-2/4 mx-auto">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-0 md:gap-5">
                        <input type="text" placeholder="First Name" className="block w-full mb-5 p-2 bg-inherit border border-gray-600" />
                        <input type="text" placeholder="Last Name" className="block w-full mb-5 p-2 bg-inherit border border-gray-600" />
                    </div>
                    <input type="email" placeholder="Email" className="block w-full mb-5 p-2 bg-inherit border border-gray-600" />
                    <input type="text" placeholder="Subject" className="block w-full mb-5 p-2 bg-inherit border border-gray-600" />
                    <textarea className="block w-full mb-5 p-2 bg-inherit border border-gray-600" />
                    <button className="bg-main py-2 px-4 w-full">Send Message</button>
                </form>
            </div>
            <div className="absolute top-0 right-0 -z-10">
                <RightSvg />
            </div>
        </motion.div>
    )
}

export default ContactForm;