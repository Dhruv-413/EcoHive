import About from "../Components/About";
import Team from "../Components/Team";
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import FAQ from "../Components/Faq";
import ComponentsSection from "../Components/Features";
import Landing from "../Components/Landing";

export const LandingPage = () =>{
    return (
        <div className="bg-gray-100">
            <Navbar></Navbar>
            <Landing></Landing>
            <About></About>
            <ComponentsSection></ComponentsSection>
            <FAQ></FAQ>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
}