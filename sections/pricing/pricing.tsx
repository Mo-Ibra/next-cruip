import Card from "./card/card";

const PricingSection = () => {
    return (
        <section className='py-10'>
            <div className="container mx-auto px-10 border-b border-gray-800">
                <div className='text-center'>
                    <div>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold header-color w-3/4 mx-auto my-5'>Simple, transparent pricing</h2>
                        <p className='text-color my-5 w-2/4 mx-auto text-sm lg:text-lg'>Get the Open PRO plan that fits your needs at a special introductory price.</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 mb-16">
                    <Card title="Essential" price={49} />
                    <Card title="Premium" price={79} />
                    <Card title="Advanced" price={129} />
                </div>
            </div>
        </section>
    )
}

export default PricingSection;