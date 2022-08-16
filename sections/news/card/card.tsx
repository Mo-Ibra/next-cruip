import Image, { StaticImageData } from 'next/image';

interface CardInterface {
    imageUrl: StaticImageData;
    title: string;
}
const Card = ({ imageUrl, title }: CardInterface) => {
    return (
        <div className="box-bg">
            <Image src={imageUrl} />
            <div className="p-5">
                <div>
                    <h3 className="text-header text-2xl font-bold my-5">{title}</h3>
                    <p className="text-color text-sm md:text-lg my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                    </p>
                    <button className="bg-main py-2 px-4">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Card;