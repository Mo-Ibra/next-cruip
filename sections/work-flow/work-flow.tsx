import Image from "next/image";

import MainImg from '../../assets/images/blog/main.jpg';

import AvatarImg from '../../assets/images/avatars/1.jpg';

import RightSvg from "../../components/header/svg/right-svg";

import { motion } from 'framer-motion';

const WorkFlow = () => {

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
            className="py-5 pt-20 relative"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-10">
                <h2 className="header-color text-3xl md:text-3xl lg:text-5xl font-bold w-2/4 mb-10">Refreshing news for developers and designers</h2>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 my-10">
                    <div>
                        <Image src={MainImg} width="520px" height="290px" />
                    </div>
                    <div>
                        <div className="my-5">
                            <span className="bg-blue-500 text-white py-1 px-2 text-sm mr-2 rounded-full">Product</span>
                            <span className="bg-red-500 text-white py-1 px-2 text-sm mr-2 rounded-full">Engineering</span>
                        </div>
                        <div>
                            <h3 className="header-color my-2 text-3xl font-bold">Designing a functional workflow at home.</h3>
                            <p className="text-color my-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="my-5">
                                <Image src={AvatarImg} width="48px" height="48px" className="rounded-full" />
                            </div>
                            <p className="text-lg text-color">Chris Solerieu - Jan 19, 2020</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 right-0 -z-10'>
                <RightSvg />
            </div>
        </motion.section>
    )
}

export default WorkFlow;