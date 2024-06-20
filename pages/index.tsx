import BlogSection from "../components/homepage/BlogSection";
import ChainsSection from "../components/homepage/ChainsSection";
import HeroSection from "../components/homepage/HeroSection";
import InvestorsSection from "../components/homepage/InvestorsSection";
import ProductsSection from "../components/homepage/ProductsSection";
import StatsSection from "../components/homepage/StatsSection";
import TestimonialsSection from "../components/homepage/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <ChainsSection />
      <TestimonialsSection />
      {/* <WhatSetsUsApartSection /> */}
      <StatsSection />
      {/* <ValidatorsSection /> */}
      <BlogSection />
      <InvestorsSection />
    </div>
  );
}
