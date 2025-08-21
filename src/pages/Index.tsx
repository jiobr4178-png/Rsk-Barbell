import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProgramCard from "@/components/ProgramCard";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dumbbell, 
  Target, 
  User, 
  Zap, 
  Clock, 
  Award, 
  Star,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Play,
  Users,
  Trophy,
  Calendar
} from "lucide-react";

// Import generated images
import heroGym from "@/assets/hero-gym.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";
import coachEddie from "@/assets/coach-eddie.jpg";

const Index = () => {
  const navigate = useNavigate();
  
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build raw power with compound movements and progressive overload",
      features: [
        "Squat, Bench, Deadlift focus",
        "Progressive programming",
        "Form technique coaching",
        "Strength assessment included"
      ]
    },
    {
      icon: Target,
      title: "Powerlifting Coaching",
      description: "Competition-ready training for serious powerlifters",
      features: [
        "Competition preparation",
        "Meet handling experience", 
        "USAPL certified coaching",
        "Personalized programming"
      ]
    },
    {
      icon: User,
      title: "1-on-1 Personal Training",
      description: "Individualized attention to achieve your specific goals",
      features: [
        "Custom workout plans",
        "Nutrition guidance",
        "Form correction",
        "Flexible scheduling"
      ]
    },
    {
      icon: Zap,
      title: "Weight Loss & Conditioning",
      description: "Transform your body with targeted fat loss and cardio",
      features: [
        "Metabolic conditioning",
        "Fat loss strategies",
        "Body composition tracking",
        "Sustainable lifestyle changes"
      ]
    }
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroGym})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
{/*           <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm font-semibold px-4 py-3">
            24/7 ACCESS • OPEN ALWAYS
          </Badge> */}
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">Stronger</span>{" "}
            <span className="text-strength">Every Day</span>
            <br />
            <span className="text-foreground">at</span>{" "}
            <span className="text-strength">RISK BARBELL</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A 24hr powerlifting and strength gym built for athletes of all levels.
            Where dedication meets results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group" onClick={() => navigate('/membership')}>
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="industrial" size="xl" className="group" onClick={() => navigate('/auth')}>
              <Play className="mr-2 h-5 w-5" />
              Book Free Trial
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
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
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-industrial">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                FOUNDER'S STORY
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Meet <span className="text-strength">Eddie Castaneda</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Eddie's transformation is nothing short of incredible. After losing 120 pounds 
                  and becoming a USAPL competitor, he understands the journey from ground zero 
                  to elite performance.
                </p>
                <p>
                  "I created RISK Barbell to be more than just a gym - it's a home for athletes 
                  to grow physically and mentally. Every rep, every set, every drop of sweat 
                  is an investment in becoming unstoppable."
                </p>
                <p>
                  Our 6000 sq ft facility isn't just about the equipment - it's about the 
                  community, the culture, and the commitment to excellence that defines us.
                </p>
              </div>
              
              <Button variant="strength" size="lg">
                Read Eddie's Full Story
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-strength rounded-2xl blur-xl opacity-20" />
              <img
                src={coachEddie}
                alt="Eddie Castaneda, Founder of RISK Barbell"
                className="relative rounded-2xl shadow-elevated w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              TRAINING PROGRAMS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Programs That <span className="text-strength">Deliver Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a beginner or elite athlete, our programs are designed 
              to push your limits and achieve your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gradient-industrial">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              MEMBERSHIP PLANS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Find a Plan That <span className="text-strength">Fits Your Lifestyle</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Affordable, flexible membership options designed for serious athletes 
              who demand the best.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <div key={index} onClick={() => navigate('/membership')} className="cursor-pointer">
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              EXPERT COACHING
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              <span className="text-strength">Train</span> with the Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certified coaches bring years of experience and proven results 
              to help you reach your potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Eddie - Head Coach */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={coachEddie}
                    alt="Eddie Castaneda"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-strength text-white">
                    HEAD COACH
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">Eduardo "Eddie" Castaneda</h3>
                <p className="text-muted-foreground mb-4">Founder & Head Coach</p>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    USAPL Competitor
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    120lbs Transformation
                  </div>
                </div>
                
                <Button variant="strength" className="w-full">
                  Book Session
                </Button>
              </CardContent>
            </Card>
            
            {/* Placeholder for future trainers */}
            <Card className="bg-card border-border border-dashed hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="w-24 h-24 rounded-full mx-auto bg-muted flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Join Our Team</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We're always looking for passionate coaches to join the RISK family
                </p>
                <Button variant="ghost">Apply Now</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border border-dashed hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="w-24 h-24 rounded-full mx-auto bg-muted flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  More expert coaches joining our team
                </p>
                <Button variant="ghost">Stay Updated</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section id="facility" className="py-20 bg-gradient-industrial">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              WORLD-CLASS FACILITY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              <span className="text-strength">6000 Sq Ft</span> of Pure Power
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art powerlifting equipment, specialized platforms, 
              and everything you need to reach your strength goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={facilityInterior}
                alt="RISK Barbell Facility Interior"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold text-lg">Competition Platforms</h3>
                <p className="text-white/80 text-sm">Professional grade equipment</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={heroGym}
                alt="Powerlifting Equipment"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold text-lg">Olympic Lifting Area</h3>
                <p className="text-white/80 text-sm">Dedicated space for technique</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="w-full h-64 bg-gradient-strength flex items-center justify-center">
                <div className="text-center text-white">
                  <Dumbbell className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="font-bold text-lg">Accessory Zone</h3>
                  <p className="text-white/80 text-sm">Complete your training</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="xl" onClick={() => navigate('/auth')}>
              Schedule Facility Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              SUCCESS STORIES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              <span className="text-strength">Real Results</span> from Real Athletes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "RISK Barbell transformed my approach to training. Eddie's coaching 
                  helped me add 100lbs to my total in just 6 months. The community here is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MR</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-foreground">Marcus Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Powerlifter</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "As a beginner, I was intimidated by powerlifting. The team here made 
                  me feel welcome and confident. I've never been stronger or more motivated."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-background font-bold text-sm">SW</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-foreground">Sarah Williams</p>
                    <p className="text-sm text-muted-foreground">Strength Athlete</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "The 24/7 access is a game-changer for my schedule. Quality equipment, 
                  great atmosphere, and results that speak for themselves."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-strength rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DL</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-foreground">David Lee</p>
                    <p className="text-sm text-muted-foreground">Competitive Lifter</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-industrial">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              KNOWLEDGE BASE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Training Tips, Stories, <span className="text-strength">& Updates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest training methodologies, success stories, 
              and insights from our coaching team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group cursor-pointer">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-primary flex items-center justify-center">
                  <Dumbbell className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                </div>
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                  TRAINING
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Mastering the Big Three: A Beginner's Guide
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn the fundamentals of squat, bench press, and deadlift with 
                  proper form and progressive techniques...
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>By Eddie Castaneda</span>
                  <span>5 min read</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group cursor-pointer">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-secondary flex items-center justify-center">
                  <Trophy className="h-12 w-12 text-background group-hover:scale-110 transition-transform" />
                </div>
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                  SUCCESS
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  From 300 to 500: Sarah's Deadlift Journey
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Follow Sarah's incredible transformation and the training methods 
                  that helped her achieve a 500lb deadlift...
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Member Spotlight</span>
                  <span>8 min read</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group cursor-pointer">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-strength flex items-center justify-center">
                  <Target className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                </div>
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                  NUTRITION
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Fueling Performance: Pre & Post Workout Nutrition
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Optimize your training results with evidence-based nutrition 
                  strategies for strength athletes...
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>By Eddie Castaneda</span>
                  <span>6 min read</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="strength" size="lg">
              Read More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              GET IN TOUCH
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Ready to <span className="text-strength">Start Your Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the RISK Barbell family today. Contact us for membership information, 
              facility tours, or training questions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg shadow-glow">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      123 Strength Street<br />
                      Powerlifting District, ST 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg shadow-glow">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-RISK</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg shadow-glow">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">info@riskbarbell.com</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gradient-industrial border-border">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Gym Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Sunday</span>
                      <span className="text-primary font-semibold">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Staffed Hours</span>
                      <span>6AM - 10PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-industrial rounded-2xl p-8 border border-border">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Google Maps integration coming soon</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="hero" size="lg" className="w-full">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-strength p-2 rounded-lg shadow-glow">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-black">
                <span className="text-strength">RISK</span>{" "}
                <span className="text-foreground">BARBELL</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Building strength, character, and community one rep at a time.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Button variant="ghost" size="sm">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm">
                Terms of Service
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 RISK Barbell. All rights reserved. Built for athletes, by athletes.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="hero"
          size="lg"
          className="rounded-full shadow-elevated hover:scale-105 transition-all duration-300"
          onClick={() => {
            // Simple chat implementation - could integrate with WhatsApp, Messenger, etc.
            window.open('mailto:info@riskbarbell.com?subject=I want to chat about RISK Barbell', '_blank');
          }}
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          Let's Chat
        </Button>
      </div>
    </div>
  );
};

export default Index;
