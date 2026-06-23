import CTASection from "../../_components/cta-section";
import Footer from "../../_components/footer";
import NavBar from "../../_components/navbar";
import PackageDetailSection from "../_components/package-detail-section";

export default async function Page({ params }: { params: Promise<{ slug: string }>; }) {
    const { slug } = await params;
    return (
        <div className="bg-black">
            <NavBar />
            <div className="mt-30"><PackageDetailSection slug={slug} /></div>
            <CTASection />
            <Footer />
        </div>
    );
}