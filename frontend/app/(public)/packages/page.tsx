import CTASection from "../_components/cta-section";
import Footer from "../_components/footer";
import NavBar from "../_components/navbar";
import PackageSection from "../_components/package-section";

export default function Page() {
    return (
        <div>
            <NavBar/>
            <PackageSection/>
            <CTASection/>
            <Footer/>
        </div>
    );
}