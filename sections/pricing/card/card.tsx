import { AiOutlineCheck } from "react-icons/ai";

import { motion } from 'framer-motion';

interface CardInterface {
    title: string;
    price: number;
}

const Card = ({ title, price }: CardInterface) => {
    
    const cardVariants = {
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
            className="box-bg p-5 my-10 rounded-sm"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <span className="main-color font-bold text-3xl">{title}</span>
            <h2 className="text-color text-2xl my-3">$<span className="text-4xl font-bold header-color">{price}</span>/mo</h2>
            <p className="text-color my-3">Better insights for growing businesses that want more customers</p>
            <div className="my-5 border-b border-gray-600"></div>
            <h3 className="header-color my-2 font-semibold text-lg">Features include:</h3>
            <ul>
                <li className="text-color my-3 flex items-center gap-2">
                    <AiOutlineCheck className="main-color" />
                    50 Placeholder text commonly
                </li>
                <li className="text-color my-3 flex items-center gap-2">
                    <AiOutlineCheck className="main-color" />
                    Consectetur adipiscing elit
                </li>
                <li className="text-color my-3 flex items-center gap-2">
                    <AiOutlineCheck className="main-color" />
                    Excepteur sint occaecat cupidatat
                </li>
                <li className="text-color my-3 flex items-center gap-2">
                    <AiOutlineCheck className="main-color" />
                    Officia deserunt mollit anim
                </li>
            </ul>
            <div className="mt-20 mb-5 text-center">
                <button className="bg-main w-full py-2 hover:bg-main-focus duration-300">Start Free Trail</button>
            </div>
        </motion.div>
    )
}

export default Card;