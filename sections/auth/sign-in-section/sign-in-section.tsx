import Link from "next/link";
import RightSvg from "../../../components/header/svg/right-svg";

import { motion } from 'framer-motion';

const SignInSection = () => {

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
            className="py-10 relative"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-10">
                <div className="text-center">
                    <h2 className="header-color text-2xl md:text-3xl lg:text-5xl font-bold mx-auto w-3/4">Welcome back. We exist to make entrepreneurship easier.</h2>
                </div>
                <div className="mt-14 text-center md:w-2/4 lg:w-1/3 mx-auto">
                    <button className="bg-red-600 text-white p-2 w-full font-semibold">Sign In with Google</button>
                    <div className="border-b border-gray-800 mb-4" />
                    <form>
                        <input type="text" placeholder="Enter your email!" className="bg-inherit text-color border border-gray-700 outline-none p-2 w-full my-3" />
                        <input type="text" placeholder="Enter your password" className="bg-inherit text-color border border-gray-700 outline-none p-2 w-full my-3" />
                        <div className="flex items-center justify-between my-3">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="check" />
                                <label htmlFor="check" className="text-color">Keep me login</label>
                            </div>
                            <div>
                                <p className="text-main font-bold cursor-pointer">Forgot Password?</p>
                            </div>
                        </div>
                        <div className="my-5">
                            <button className="bg-main text-white w-full p-2">Sign In</button>
                        </div>
                        <div>
                            <p className="text-color">Don’t you have an account?
                                <Link href="/auth/sign-up">
                                    <span className="text-main font-bold cursor-pointer">Sign up</span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="absolute top-0 right-0">
                <RightSvg />
            </div>
        </motion.section>
    )
}

export default SignInSection;