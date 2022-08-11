import Title from "../../components/title/title";

import { FcDepartment, FcAddRow, FcAddImage, FcBusinessContact, FcCallTransfer, FcAbout } from 'react-icons/fc';

import Feature from "./feature/feature";

const Features = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-10 border-b border-gray-800">
                <Title header="The majority our customers do not understand their workflows." hasSpan={false} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    <Feature icon={<FcDepartment className="mx-auto text-5xl" />} name="Instant Features" />
                    <Feature icon={<FcAddRow className="mx-auto text-5xl" />} name="Instant Features" />
                    <Feature icon={<FcAddImage className="mx-auto text-5xl" />} name="Instant Features" />
                    <Feature icon={<FcBusinessContact className="mx-auto text-5xl" />} name="Instant Features" />
                    <Feature icon={<FcCallTransfer className="mx-auto text-5xl" />} name="Instant Features" />
                    <Feature icon={<FcAbout className="mx-auto text-5xl" />} name="Instant Features" />
                </div>
            </div>
        </section>
    )
}

export default Features;