import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EventCard } from "@/components/events/EventCard";
import { FeaturedEvent } from "@/components/events/FeaturedEvent";
import { mockEvents } from "@/data/mockEvents";
import { 
  ArrowRight, 
  Calendar, 
  QrCode, 
  Users, 
  BarChart3, 
  Sparkles,
  CheckCircle,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Discover Events",
    description: "Browse all campus events in one place. Filter by date, type, or department.",
  },
  {
    icon: QrCode,
    title: "QR Entry Pass",
    description: "Get instant QR codes for registered events. Quick and contactless check-in.",
  },
  {
    icon: Users,
    title: "Easy Registration",
    description: "One-click registration for any event. Track all your registrations easily.",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    description: "Organizers get real-time insights on registrations and attendance.",
  },
];

const stats = [
  { value: "500+", label: "Events Hosted" },
  { value: "15K+", label: "Students" },
  { value: "50+", label: "Departments" },
  { value: "98%", label: "Satisfaction" },
];

export default function Index() {
  const featuredEvent = mockEvents.find((e) => e.isFeatured);
  const upcomingEvents = mockEvents.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Your campus event hub</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Discover & Connect at{" "}
              <span className="text-gradient">Campus Events</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              The all-in-one platform for discovering events, managing registrations, and connecting with your campus community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/auth">
                  Create Account
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <FeaturedEvent event={featuredEvent} />
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">Features</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From discovering events to managing registrations, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                variant="glass" 
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge variant="accent" className="mb-2">What's Coming</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Upcoming Events
              </h2>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link to="/events">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` } as any}
              />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/events">
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card variant="elevated" className="gradient-hero overflow-hidden">
            <CardContent className="p-8 md:p-12 lg:p-16 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Join thousands of students already using CampusConnect to discover and participate in campus events.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/auth?mode=signup">
                      Create Free Account
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/events">
                      Browse Events
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Free to use</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>No credit card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Instant access</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
