"use client";

import { useState } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MatchInfoSection from "@/components/match-info-section";
import NewsAndTableSection from "@/components/news-and-table-section";
import WhoWeAreSection from "@/components/who-we-are-section";
import PlayerProfilesSection from "@/components/player-profiles-section";
import StatisticsSection from "@/components/statistics-section";
import MatchGallerySection from "@/components/match-gallery-section";
import ChampionAwardsSection from "@/components/champion-awards-section";
import TopProductsSection from "@/components/top-products-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function CricketPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <MatchInfoSection />
      <NewsAndTableSection />
      <WhoWeAreSection />
      <PlayerProfilesSection />
      <StatisticsSection />
      {/* <ChampionAwardsSection /> */}
      <MatchGallerySection />
      {/* <TopProductsSection /> */}
      {/* <NewsletterSection /> */}
      <Footer />
    </div>
  );
}
