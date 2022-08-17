import Image, { StaticImageData } from "next/image";

import { motion } from 'framer-motion';

interface CardInterface {
    imageUrl: StaticImageData;
    name: string;
    role: string;
}

const Card = ({ imageUrl, name, role }: CardInterface) => {

    const cardVariants = {
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
        <motion.div
            className="box-bg p-5 my-5 rounded-sm relative"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="absolute top-3 left-3">
                <Image src={imageUrl} style={{ borderRadius: '50%' }} width="48px" height="48px" />
            </div>
            <p className="text-color mt-12">
                — Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.
                I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
            </p>
            <div className="border-b border-gray-600 my-5" />
            <div>
                <p className="font-semibold text-lg">{name} - <span className="text-main">{role}</span></p>
            </div>
        </motion.div>
    )
}

export default Card;