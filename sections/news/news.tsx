import Title from "../../components/title/title";

// Images
import NewsImg1 from '../../assets/images/news/1.jpg';
import NewsImg2 from '../../assets/images/news/2.jpg';
import NewsImg3 from '../../assets/images/news/3.jpg';

import Card from "./card/card";

const News = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-10 pb-10 border-b border-gray-800">
                <Title header="Integrated workflow designed for product teams" hasSpan={false} />
                <div className="grid lg:grid-cols-3 mg:grid-cols-1 gap-8">
                    <Card imageUrl={NewsImg1} title="How to build anything" />
                    <Card imageUrl={NewsImg2} title="How to build anything" />
                    <Card imageUrl={NewsImg3} title="How to build anything" />
                </div>
            </div>
        </section>
    )
}

export default News;