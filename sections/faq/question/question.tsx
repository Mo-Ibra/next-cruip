import { motion } from 'framer-motion';


interface QuestionInteface {
    header: string;
    text: string;
}

/**
 * [header, text] Parameters.
 * 
 * NOTE: We didn't use any parameters here but in Production you gotta use it.
*/
const Question = ({ header, text}: QuestionInteface) => {

    const questionVariants = {
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
            className="my-2"
            variants={questionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <h3 className="header-color font-bold text-2xl my-2">Publishing industries for previewing layouts?</h3>
            <p className="text-color text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis enim lobortis scelerisque fermentum.
            </p>
        </motion.div>
    )
}

export default Question;