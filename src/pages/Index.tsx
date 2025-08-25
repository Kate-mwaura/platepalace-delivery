import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <HowItWorks />
    </div>
  );
};

export default Index;
