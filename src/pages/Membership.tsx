import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Dumbbell,
  Star
} from 'lucide-react';

const Membership = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const membershipPlans = [
    {
      title: "Monthly",
      price: "89",
      period: "month", 
      description: "Perfect for trying us out",
      features: [
        "24/7 gym access",
        "All equipment included",
        "Basic programming guide",
        "Community support"
      ]
    },
    {
      title: "Quarterly",
      price: "249",
      period: "3 months",
      description: "Most popular choice for serious lifters",
      features: [
        "24/7 gym access",
        "All equipment included", 
        "Monthly form check",
        "Program customization",
        "Nutrition consultation",
        "Priority booking"
      ],
      isPopular: true
    },
    {
      title: "Annual", 
      price: "799",
      period: "year",
      description: "Best value for long-term commitment",
      features: [
        "24/7 gym access",
        "All equipment included",
        "Bi-weekly coaching sessions",
        "Competition training available",
        "Guest passes (4/month)",
        "Supplement discounts"
      ]
    }
  ];

  const handleMembershipSelect = (planTitle: string) => {
    if (!user) {
      toast({
        title: 'Sign In Required',
        description: 'Please sign in to select a membership plan.',
        variant: 'destructive',
      });
      navigate('/auth');
      return;
    }

    toast({
      title: 'Membership Selected!',
      description: `You've selected the ${planTitle} plan. Our team will contact you shortly to complete the setup.`,
    });

    // In a real app, this would integrate with a payment processor
    console.log(`User ${user.email} selected ${planTitle} plan`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-industrial">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              MEMBERSHIP PLANS
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-foreground">Choose Your</span>{" "}
              <span className="text-strength">Path to Strength</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Flexible membership options designed for athletes who demand the best. 
              All plans include 24/7 access to our world-class facility.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                24/7 Access
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Expert Coaching
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Competition Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {membershipPlans.map((plan, index) => (
              <div key={index} onClick={() => handleMembershipSelect(plan.title)}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">
              Every Member Gets <span className="text-strength">Elite Access</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-strength rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Professional Equipment
                </h3>
                <p className="text-muted-foreground text-sm">
                  Competition-grade powerlifting equipment, Olympic platforms, and specialized accessories
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-strength rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Community Support
                </h3>
                <p className="text-muted-foreground text-sm">
                  Train alongside like-minded athletes in a supportive, motivating environment
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-strength rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Expert Guidance
                </h3>
                <p className="text-muted-foreground text-sm">
                  Access to experienced coaches and personalized training programs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-industrial">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            Ready to <span className="text-strength">Transform</span> Your Strength?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join RISK Barbell today and become part of a community that's committed to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" onClick={() => !user && navigate('/auth')}>
              {user ? 'Contact Us to Get Started' : 'Sign Up to Choose Plan'}
            </Button>
            <Button variant="industrial" size="xl" asChild>
              <Link to="/">Book Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;