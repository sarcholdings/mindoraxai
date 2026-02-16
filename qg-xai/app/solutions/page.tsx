import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import VideoHero from '@/components/VideoHeroSection';
import IndustriesSection from '@/components/IndustriesSection';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 w-full ">
        <IndustriesSection />
        <VideoHero />
      </main>
      <Footer />
    </div>
  );
}
