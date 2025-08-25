import { MapPin, Search, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Location",
    description: "Enter your delivery address to see restaurants near you",
    icon: MapPin,
    color: "text-primary"
  },
  {
    id: 2,
    title: "Browse & Select",
    description: "Explore restaurants and add your favorite dishes to cart",
    icon: Search,
    color: "text-secondary"
  },
  {
    id: 3,
    title: "Place Order",
    description: "Review your order and complete the secure checkout",
    icon: ShoppingCart,
    color: "text-accent"
  },
  {
    id: 4,
    title: "Fast Delivery",
    description: "Track your order and enjoy fresh food delivered to your door",
    icon: Truck,
    color: "text-primary"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/20 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your favorite food delivered is as easy as 1, 2, 3, 4
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="text-center relative">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-background border-4 border-muted rounded-full flex items-center justify-center shadow-card">
                    <IconComponent className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-muted to-transparent" />
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;