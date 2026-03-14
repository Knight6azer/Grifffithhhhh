import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PowerRankings from "@/components/PowerRankings";
import AnimeGenres from "@/components/AnimeGenres";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PowerRankings />
      <AnimeGenres />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
