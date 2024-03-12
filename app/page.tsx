import FooterSection from "@/components/sections/Footer/page";
import HeroSection from "@/components/sections/Hero/page"
import NavbarSection from "@/components/sections/Navbar/page";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-screen max-w-[90rem] flex-col">
      <NavbarSection />
      <HeroSection />
      <FooterSection/>
    </main>
  );
}