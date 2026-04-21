import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <AboutUs />
      <Leadership />
      <Contact />
    </main>
  );
}
