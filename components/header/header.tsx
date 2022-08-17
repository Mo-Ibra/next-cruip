import type { NextComponentType } from 'next';

import Image from 'next/image';

import HeaderImg from '../../assets/images/header.png';

import LeftSvg from './svg/left-svg';
import RightSvg from './svg/right-svg';

import { motion } from 'framer-motion';

const Header: NextComponentType = () => {

    const imageContainerStyles = {
        maxWidth: '768px',
        maxHeight: '432px',
        margin: 'auto'
    };

    const headerVariants = { 
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
    };

    return (
        <motion.header
            className='py-24 relative'
            variants={headerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-10 border-b border-gray-800">
                <div className='text-center'>
                    <div>
                        <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold header-color w-3/4 mx-auto my-5'>Keep track of every important detail</h2>
                        <p className='text-color my-5 w-2/4 mx-auto text-sm md:text-lg lg:text-lg'>Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.</p>
                    </div>
                    <div style={imageContainerStyles}>
                        <Image src={HeaderImg} />
                    </div>
                    <div>
                        <h2 className='text-lg md:text-2xl lg:text-4xl font-bold header-color w-2/4 mx-auto mt-10 mb-5'>
                            Integrated workflow designed for product teams
                        </h2>
                        <p className='text-color my-5 w-2/4 mx-auto text-sm md:text-lg lg:text-lg'>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
                        </p>
                    </div>
                </div>
                {/* Counter */}
                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-5 p-5 box-bg text-center my-20'>
                    <div className='py-5 lg:border-r lg:border-gray-700'>
                        <h3 className='text-3xl lg:text-5xl font-bold main-color my-2'>179K</h3>
                        <p className='text-color text-sm md:text-lg w-3/4 mx-auto'>Lorem ipsum is placeholder text commonly used.</p>
                    </div>
                    <div className='py-5 border-r border-gray-700'>
                        <h3 className='text-3xl lg:text-5xl font-bold main-color my-2'>147%</h3>
                        <p className='text-color text-sm md:text-lg w-3/4 mx-auto'>Lorem ipsum is placeholder text commonly used.</p>
                    </div>
                    <div className='py-5'>
                        <h3 className='text-3xl lg:text-5xl font-bold main-color my-2'>$97K</h3>
                        <p className='text-color text-sm md:text-lg w-3/4 mx-auto'>Lorem ipsum is placeholder text commonly used.</p>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 right-0 -z-10'>
                <RightSvg />
            </div>
            <div className='absolute top-0 left-0 -z-10 md:block hidden'>
                <LeftSvg />
            </div>
        </motion.header>
    )
};

export default Header;