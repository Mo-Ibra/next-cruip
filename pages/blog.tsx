import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import Articles from "../sections/articles/articles";
import Hello from "../sections/hello/hello";
import WorkFlow from "../sections/word-flow/work-flow";

const Blog = () => {
    return (
        <>
            <Navbar />
            <WorkFlow />
            <Articles />
            <Hello />
            <Footer />
        </>
    )
}

export default Blog;