import SignInSection from '../../sections/auth/sign-in-section/sign-in-section';
import Footer from "../../components/footer/Footer";
import Hello from '../../sections/hello/hello';
import Navbar from '../../components/navbar/navbar';

const SignIn = () => {
    return (
        <>
            <Navbar />
            <SignInSection />
            <Hello />
            <Footer />
        </>
    )
}

export default SignIn;