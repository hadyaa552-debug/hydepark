import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Location from "@/components/location";
import Units from "@/components/units";
import Pricing from "@/components/pricing";
import Amenities from "@/components/amenities";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import MobileBottomBar from "@/components/mobile-bottom-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Location />
        <Units />
        <Pricing />
        <Amenities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar />
    </>
  );
}
