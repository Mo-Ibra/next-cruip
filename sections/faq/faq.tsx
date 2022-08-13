import Title from "../../components/title/title";
import Question from "./question/question";

const Faq = () => {
    return (
        <section className="pb-10">
            <div className="container mx-auto px-10 border-b border-gray-800">
                <Title header="Frequently asked questions" hasSpan={false} />
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    {/* NOTE: In Production you have to assign these values.
                        And use the question parameters in question Component.
                    */}
                    <Question header="" text="" />
                    <Question header="" text="" />
                    <Question header="" text="" />
                    <Question header="" text="" />
                    <Question header="" text="" />
                    <Question header="" text="" />
                </div>
            </div>
        </section>
    )
}

export default Faq;