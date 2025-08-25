import { Button } from "@/components/ui/button";
import { Pizza, Coffee, Sandwich, Salad, IceCream, Soup } from "lucide-react";

const categories = [
  { id: 1, name: "Pizza", icon: Pizza, color: "text-red-500" },
  { id: 2, name: "Coffee", icon: Coffee, color: "text-amber-600" },
  { id: 3, name: "Burgers", icon: Sandwich, color: "text-orange-500" },
  { id: 4, name: "Healthy", icon: Salad, color: "text-green-500" },
  { id: 5, name: "Desserts", icon: IceCream, color: "text-pink-500" },
  { id: 6, name: "Soups", icon: Soup, color: "text-blue-500" },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're craving from our wide selection of cuisines
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant="outline"
                className="h-24 flex-col space-y-2 border-2 hover:border-primary hover:shadow-primary/20 transition-all duration-300 group"
              >
                <IconComponent 
                  className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-transform`} 
                />
                <span className="text-sm font-medium">{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;