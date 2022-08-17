import { motion } from 'framer-motion';

interface FeatureInterface {
    icon: JSX.Element;
    name: string;
}

const Feature = ({ icon, name }: FeatureInterface) => {

    const featureVariants = {
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
            className="text-center"
            variants={featureVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="icon__provider">
                {
                    icon
                }
                {/* <FcDepartment className="mx-auto text-5xl" /> */}
            </div>
            <div>
                <h3 className="header-color text-2xl my-2 font-bold">{name}</h3>
                <p className="text-color px-16 text-xs md:text-sm md:px-8">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                </p>
            </div>
        </motion.div>
    )
}

export default Feature;