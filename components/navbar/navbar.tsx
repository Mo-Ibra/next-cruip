import Logo from './logo/logo';

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="py-5">
            <div className="container px-5 mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <ul className='flex items-center gap-8'>
                            <li className='text-color font-semibold cursor-pointer'>
                                <Link href="/">
                                    <a className='text-sm md:text-base'>Home</a>
                                </Link>
                            </li>
                            <li className='text-color font-semibold cursor-pointer'>
                                <Link href="/pricing">
                                    <a className='text-sm md:text-base'>Pricing</a>
                                </Link>
                            </li>
                            <li className='text-color font-semibold cursor-pointer'>
                                <Link href="/blog">
                                    <a className='text-sm md:text-base'>Blog</a>
                                </Link>
                            </li>
                            <li className='text-color font-semibold cursor-pointer'>
                                <Link href="/contact">
                                    <a className='text-sm md:text-base'>Contact</a>
                                </Link>
                            </li>
                            <li className='text-color font-semibold cursor-pointer'>
                                <Link href="/faq">
                                    <a className='text-sm md:text-base'>Faq</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center gap-5'>
                        <Link href="/auth/sign-in">
                            <button className='text-main'>Sign In</button>
                        </Link>
                        <Link href="/auth/sign-up">
                            <button className='bg-main text-white py-2 px-4 rounded-sm'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;