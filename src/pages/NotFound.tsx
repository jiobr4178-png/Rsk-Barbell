import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dumbbell, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="bg-gradient-strength p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
            <Dumbbell className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl font-black text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-bold text-strength mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Looks like this page didn't make it to the gym today. 
            Let's get you back to building strength!
          </p>
        </div>
        
        <Button variant="hero" size="lg" asChild>
          <a href="/" className="inline-flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Return to RISK Barbell
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
