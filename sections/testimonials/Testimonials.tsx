import Card from "./card/card";

// Avatar Img
import AvatarImg1 from '../../assets/images/avatars/1.jpg';
import AvatarImg2 from '../../assets/images/avatars/2.jpg';
import AvatarImg3 from '../../assets/images/avatars/3.jpg';
import Title from "../../components/title/title";

const Testimonials = () => {
    return (
        <section className="py-10">
            <Title header="Don't take our word for it" hasSpan={false} />
            <div className="container mx-auto px-10 border-b border-gray-800">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-16">
                    <Card imageUrl={AvatarImg1} name="Anastasia Dan" role="UX Board" />
                    <Card imageUrl={AvatarImg2} name="Mohamed Ali" role="Front End Developer" />
                    <Card imageUrl={AvatarImg3} name="John Doe" role="Product Manger" />
                </div>
            </div>
        </section>
    )
}

export default Testimonials;