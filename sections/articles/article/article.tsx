import { StaticImageData } from "next/image";
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ArticleInterface {
    articleImg: StaticImageData;
    avatarImg: StaticImageData;
    title: string;
    author: string;
}

const Article = ({ articleImg, avatarImg, title, author }: ArticleInterface) => {

    const articleVariants = {
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
    };

    return (
        <motion.div
            className="my-2"
            variants={articleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div>
                <Image src={articleImg} />
            </div>
            <div className="py-2">
                <div className="my-5">
                    <span className="py-1 px-2 mr-2 rounded-full text-white bg-blue-500 text-sm">Product</span>
                    <span className="py-1 px-2 mr-2 rounded-full text-white bg-red-500 text-sm">Engineering</span>
                </div>
                <h3 className="header-color text-2xl font-bold my-2">{title}</h3>
                <p className="text-color my-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="border-b border-gray-600 my-5" />
                <div className="flex items-center gap-4">
                    <Image src={avatarImg} width="36px" height="36px" className="rounded-full" />
                    <div>
                        <p className="text-color text-lg"><span className="header-color font-semibold">{author}</span> - Jan 17, 2020</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Article;