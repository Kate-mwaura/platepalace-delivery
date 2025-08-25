import RestaurantCard from "./RestaurantCard";
import { Button } from "@/components/ui/button";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";

const featuredRestaurants = [
  {
    id: 1,
    name: "Mario's Italian Kitchen",
    image: restaurant1,
    cuisine: "Italian • Pizza • Pasta",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    featured: true
  },
  {
    id: 2,
    name: "Sakura Sushi Bar",
    image: restaurant2,
    cuisine: "Japanese • Sushi • Asian",
    rating: 4.9,
    deliveryTime: "30-40 min",
    deliveryFee: "$2.99",
    featured: true
  },
  {
    id: 3,
    name: "El Taco Loco",
    image: restaurant3,
    cuisine: "Mexican • Tacos • Burritos",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: "Free",
    featured: false
  }
];

const FeaturedRestaurants = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Restaurants
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular restaurants in your area, handpicked for quality and taste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              deliveryFee={restaurant.deliveryFee}
              featured={restaurant.featured}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;