import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ProgramCard = ({ icon: Icon, title, description, features }: ProgramCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-shadow duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="strength" className="w-full mt-6">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;