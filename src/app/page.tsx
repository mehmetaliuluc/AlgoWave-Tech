import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import VisionMission from '../components/VisionMission';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <VisionMission />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
