import SignUpSection from '../../sections/auth/sign-up-section/sign-up-section';
import Footer from "../../components/footer/Footer";
import Hello from '../../sections/hello/hello';
import Navbar from '../../components/navbar/navbar';

const SignIn = () => {
    return (
        <>
            <Navbar />
            <SignUpSection />
            <Hello />
            <Footer />
        </>
    )
}

export default SignIn;