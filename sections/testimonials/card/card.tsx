import Image, { StaticImageData } from "next/image";

// Avatar Img
import AvatarImg1 from '../../assets/images/avatars/1.jpg';

interface CardInterface {
    imageUrl: StaticImageData;
    name: string;
    role: string;
}

const Card = ({ imageUrl, name, role }: CardInterface) => {
    return (
        <div className="box-bg p-5 my-5 rounded-sm relative">
            <div className="absolute top-3 left-3">
                <Image src={imageUrl} style={{ borderRadius: '50%' }} width="48px" height="48px" />
            </div>
            <p className="text-color mt-12">
                — Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.
                I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
            </p>
            <div className="border-b border-gray-600 my-5" />
            <div>
                <p className="font-semibold text-lg">{name} - <span className="text-main">{role}</span></p>
            </div>
        </div>
    )
}

export default Card;