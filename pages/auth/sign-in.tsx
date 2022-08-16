import SignInSection from '../../sections/auth/sign-in-section/sign-in-section';
import Footer from "../../components/footer/Footer";
import Hello from '../../sections/hello/hello';

const SignIn = () => {
    return (
        <>
            <SignInSection />
            <Hello />
            <Footer />
        </>
    )
}

export default SignIn;