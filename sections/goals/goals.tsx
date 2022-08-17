import Image from 'next/image';

import React from 'react';

import { AiOutlineCheck } from 'react-icons/ai';

import Title from '../../components/title/title';

// Images
import FeaturesImg1 from '../../assets/images/features/1.png';
import FeaturesImg2 from '../../assets/images/features/2.png';
import FeaturesImg3 from '../../assets/images/features/3.png';

import { motion } from 'framer-motion';

function Goals() {

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
    };

    return (
        <motion.section
            className='py-10'
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-10 border-b border-gray-800">
                <Title header='One product, unlimited solutions' hasSpan={true} />
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 my-10">
                    <div className='mt-16'>
                        <span className='main-color font-mono text-lg'>More speed. Less spend</span>
                        <h2 className='text-3xl font-bold header-color '>Keep projects on schedule</h2>
                        <p className='text-color my-5 w-2/4 text-lg'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Duis aute irure dolor in reprehenderit</p>
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Excepteur sint occaecat</p>
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Amet consectetur adipiscing elit</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={FeaturesImg1} />
                    </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 my-10">
                    <div>
                        <Image src={FeaturesImg2} />
                    </div>
                    <div className='mt-16'>
                        <span className='main-color font-mono text-lg'>More speed. Less spend</span>
                        <h2 className='text-3xl font-bold header-color '>Keep projects on schedule</h2>
                        <p className='text-color my-5 w-2/4 text-lg'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Duis aute irure dolor in reprehenderit</p>
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Excepteur sint occaecat</p>
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Amet consectetur adipiscing elit</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 my-10">
                    <div className='mt-16'>
                        <span className='main-color font-mono text-lg'>More speed. Less spend</span>
                        <h2 className='text-3xl font-bold header-color '>Keep projects on schedule</h2>
                        <p className='text-color my-5 w-2/4 text-lg'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Duis aute irure dolor in reprehenderit</p>
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Excepteur sint occaecat</p>
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                <p className='text-sm md:text-base'>Amet consectetur adipiscing elit</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={FeaturesImg3} />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Goals