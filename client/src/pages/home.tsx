import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import HoursInfo from "@/components/sections/hours-info";
import Menu from "@/components/sections/menu";
import About from "@/components/sections/about";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HoursInfo />
      <Menu />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
