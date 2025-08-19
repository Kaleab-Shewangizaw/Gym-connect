import HeroSection from "./LandingPageSections/Hero";
import HeroNavbar from "./LandingPageSections/Navbar";

export default function Home() {
  return (
    <div className=" relative w-full flex flex-col">
      <HeroNavbar />
      <HeroSection />
      <section className="h-400"></section>
    </div>
  );
}
