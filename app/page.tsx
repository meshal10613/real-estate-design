import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedGrid } from "@/components/FeaturedGrid";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <FeaturedGrid />
                <StatsSection />
                <Testimonials />
                <CTASection />
            </main>
        </div>
    );
}
