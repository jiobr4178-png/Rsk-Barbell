import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, price, period, description, features, isPopular = false }: PricingCardProps) => {
  return (
    <Card className={`relative ${
      isPopular 
        ? "border-primary shadow-glow bg-gradient-to-br from-card to-card/80" 
        : "bg-card border-border hover:border-primary/50"
    } transition-all duration-300 hover:shadow-elevated group`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-strength text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-elevated">
            <Star className="h-3 w-3 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className={`text-2xl font-bold ${isPopular ? 'text-strength' : 'text-foreground'}`}>
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-black text-foreground">${price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          variant={isPopular ? "hero" : "strength"} 
          size="lg" 
          className="w-full"
        >
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;