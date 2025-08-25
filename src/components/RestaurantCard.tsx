import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Truck } from "lucide-react";

interface RestaurantCardProps {
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  featured?: boolean;
}

const RestaurantCard = ({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  featured = false
}: RestaurantCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-gradient-card border-0">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-500 fill-current" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">{cuisine}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Truck className="h-4 w-4" />
              <span>{deliveryFee}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;