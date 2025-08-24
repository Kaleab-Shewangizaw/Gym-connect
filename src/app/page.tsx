import FeaturedSection from "./LandingPageSections/Featured";
import FooterSection from "./LandingPageSections/Footer";
import HeroSection from "./LandingPageSections/Hero";
import HowItWorksSection from "./LandingPageSections/HowItWorks";
import HeroNavbar from "./LandingPageSections/Navbar";
// import TestimonialsSection from "./LandingPageSections/Testimonials";
import WhyUsSection from "./LandingPageSections/WhyUs";

export default function Home() {
  return (
    <div className=" relative w-full flex flex-col">
      <HeroNavbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturedSection />
      <WhyUsSection />
      {/* <TestimonialsSection /> */}
      <FooterSection />
    </div>
  );
}
