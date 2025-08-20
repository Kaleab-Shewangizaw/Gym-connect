import FeaturedSection from "./LandingPageSections/Featured";
import HeroSection from "./LandingPageSections/Hero";
import HowItWorksSection from "./LandingPageSections/HowItWorks";
import HeroNavbar from "./LandingPageSections/Navbar";
import WhyUsSection from "./LandingPageSections/WhyUs";

export default function Home() {
  return (
    <div className=" relative w-full flex flex-col">
      <HeroNavbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturedSection />
      <WhyUsSection />
    </div>
  );
}
