import Image from "next/image";
import Link from "next/link";

import ErrorImg from '../../assets/images/404.jpg';

import { motion } from 'framer-motion';

const ErrorSection = () => {

    const sectionVariants = {
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
            className="py-20"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-10 text-center">
                <Image src={ErrorImg} width="196px" height="196px" className="rounded-full" />
                <h3 className="text-5xl font-bold my-4 header-color">Uh oh. That page doesn’t exist.</h3>
                <p className="text-color">Head to our <Link href="/"><span className="text-main font-semibold cursor-pointer">homepage</span></Link> that does exist, or try double-checking the URL.</p>
            </div>
        </motion.section>
    )
}

export default ErrorSection;