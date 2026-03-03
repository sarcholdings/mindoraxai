"use client";

import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import VideoHero from '@/components/VideoHeroSection';
import IndustriesSection from '@/components/IndustriesSection';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SwiftAINavigation scrolledByDefault />
      <main className="flex-1 w-full pt-20">
        <IndustriesSection />
        <VideoHero />
      </main>
      <Footer />
    </div>
  );
}
