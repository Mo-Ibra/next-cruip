import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    <div>
                        <p className="text-color text-sm">
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                    </div>
                    <div>
                        <h3 className="header-color text-lg font-bold">Products</h3>
                        <ul>
                            <li className="text-color cursor-pointer text-sm my-2">Web Studio</li>
                            <li className="text-color cursor-pointer text-sm my-2">DynamicBox Flex</li>
                            <li className="text-color cursor-pointer text-sm my-2">Programming Forms</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="header-color text-lg font-bold">Company</h3>
                        <ul>
                            <li className="text-color cursor-pointer text-sm my-2">Consectetur adipiscing</li>
                            <li className="text-color cursor-pointer text-sm my-2">Labore et dolore</li>
                            <li className="text-color cursor-pointer text-sm my-2">Consectetur adipiscing</li>
                            <li className="text-color cursor-pointer text-sm my-2">Labore et dolore</li>
                            <li className="text-color cursor-pointer text-sm my-2">Consectetur adipiscing</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="header-color text-lg font-bold">Products</h3>
                        <ul>
                            <li className="text-color cursor-pointer text-sm my-2">Nostrud exercitation</li>
                            <li className="text-color cursor-pointer text-sm my-2">Visual mockups</li>
                            <li className="text-color cursor-pointer text-sm my-2">Nostrud exercitation</li>
                            <li className="text-color cursor-pointer text-sm my-2">Visual mockups</li>
                            <li className="text-color cursor-pointer text-sm my-2">Nostrud exercitation</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center my-5">
                    <p className="text-color">© Cruip.com. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        <AiFillTwitterCircle className="text-color cursor-pointer" />
                        <AiFillFacebook className="text-color cursor-pointer" />
                        <AiFillInstagram className="text-color cursor-pointer" />
                        <AiFillLinkedin className="text-color cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;