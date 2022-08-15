import Footer from "../components/footer/Footer";
import Articles from "../sections/articles/articles";
import Hello from "../sections/hello/hello";
import WorkFlow from "../sections/word-flow/work-flow";

const Blog = () => {
    return (
        <>
            <WorkFlow />
            <Articles />
            <Hello />
            <Footer />
        </>
    )
}

export default Blog;