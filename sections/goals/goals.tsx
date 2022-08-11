import Image from 'next/image';

import React from 'react';

import { AiOutlineCheck } from 'react-icons/ai';

// Images
import FeaturesImg1 from '../../assets/images/features/1.png';
import FeaturesImg2 from '../../assets/images/features/2.png';
import FeaturesImg3 from '../../assets/images/features/3.png';

function Goals() {
    return (
        <section className='py-10'>
            <div className="container mx-auto px-10 border-b border-gray-800">
                <div className='py-5 text-center'>
                    <span className='bg-green-200 text-green-500 font-bold p-1 px-4 rounded-2xl'>Reach goals that matter</span>
                    <h3 className='text-4xl font-bold header-color w-3/4 mx-auto my-5'>One product, unlimited solutions</h3>
                    <p className='text-color my-5 w-2/4 mx-auto text-lg'>
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
                    </p>
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
                                Duis aute irure dolor in reprehenderit
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                Excepteur sint occaecat
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                Amet consectetur adipiscing elit
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
                                Duis aute irure dolor in reprehenderit
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                Excepteur sint occaecat
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                Amet consectetur adipiscing elit
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
                                Duis aute irure dolor in reprehenderit
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                Excepteur sint occaecat
                            </li>
                            <li className='text-color my-2 text-lg flex items-center gap-2'>
                                <AiOutlineCheck className='main-color' />
                                Amet consectetur adipiscing elit
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src={FeaturesImg3} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Goals