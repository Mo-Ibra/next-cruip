import Footer from "../components/footer/Footer";
import ContactForm from "../components/forms/contact-form/contact-form";
import Navbar from "../components/navbar/navbar";
import Hello from "../sections/hello/hello";

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactForm />
            <Hello />
            <Footer />
        </>
    )
}

export default Contact;