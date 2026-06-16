import CTASection from "../_components/cta-section";
import Footer from "../_components/footer";
import NavBar from "../_components/navbar";
import PackageSection from "../_components/package-section";

export default function Page() {
    return (
        <div className="bg-black">
            <NavBar/>
            <div className="mt-30"><PackageSection /></div>
            <CTASection/>
            <Footer/>
        </div>
    );
}