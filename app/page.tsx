import FooterSection from "@/components/sections/Footer/page";
import HeroSection from "@/components/sections/Hero/page"
import NavbarSection from "@/components/sections/Navbar/page";
import ProjectSection from "@/components/sections/Project/page";
import AboutUsSection from "@/components/sections/AboutUs/page";
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-screen  flex-col">
      {/* max-w-[100rem] <-- change the width of the screen */}
      <NavbarSection />
      <HeroSection />
      <AboutUsSection/>
      <ProjectSection/>
      <FooterSection/>
    </main>
  );
}