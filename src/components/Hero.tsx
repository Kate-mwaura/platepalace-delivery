import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Delicious Food
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">
              Delivered Fast
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover amazing restaurants and get your favorite meals delivered in minutes
          </p>

          {/* Location and Search */}
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <Input
                    placeholder="Enter your delivery address"
                    className="pl-10 h-12 text-gray-900 bg-white border-gray-200"
                  />
                </div>
              </div>
              <Button 
                size="lg" 
                className="h-12 px-8 bg-gradient-primary hover:opacity-90 text-white shadow-primary font-semibold"
              >
                <Search className="h-5 w-5 mr-2" />
                Find Restaurants
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-gray-300">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">30min</div>
              <div className="text-gray-300">Avg Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50k+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;