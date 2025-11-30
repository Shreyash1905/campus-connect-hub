import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockEvents } from "@/data/mockEvents";
import { toast } from "@/hooks/use-toast";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  User, 
  ArrowLeft,
  Share2,
  Heart,
  CheckCircle,
  Building
} from "lucide-react";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  workshop: "info",
  seminar: "warning",
  cultural: "accent",
  sports: "success",
  technical: "default",
  other: "secondary",
};

export default function EventDetail() {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Event Not Found</h1>
          <Button asChild>
            <Link to="/events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const spotsLeft = event.capacity - event.registered;
  const fillPercentage = (event.registered / event.capacity) * 100;

  const handleRegister = () => {
    toast({
      title: "Registration Successful!",
      description: "You have been registered for this event. Check your dashboard for the QR pass.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Event link has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <Button variant="glass" size="sm" asChild>
              <Link to="/events">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-24 relative z-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title Card */}
              <Card variant="elevated" className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant={typeColors[event.type] as any}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </Badge>
                  {event.isFeatured && (
                    <Badge variant="accent">Featured</Badge>
                  )}
                </div>

                <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  {event.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{event.organizer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>{event.department}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" onClick={handleShare}>
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
              </Card>

              {/* About */}
              <Card variant="default" className="p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold mb-4">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </Card>

              {/* Details */}
              <Card variant="default" className="p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold mb-6">Event Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Date</div>
                      <div className="font-semibold">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Time</div>
                      <div className="font-semibold">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:col-span-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Location</div>
                      <div className="font-semibold">{event.location}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <Card variant="elevated" className="p-6 sticky top-24">
                <h3 className="font-display text-lg font-semibold mb-4">Registration</h3>

                {/* Capacity */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.registered} / {event.capacity} registered</span>
                    </div>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        fillPercentage >= 90 ? "bg-destructive" : "gradient-accent"
                      )}
                      style={{ width: `${fillPercentage}%` }}
                    />
                  </div>
                  <div className={cn(
                    "text-sm font-medium",
                    spotsLeft <= 10 ? "text-destructive" : "text-accent"
                  )}>
                    {spotsLeft} spots remaining
                  </div>
                </div>

                {/* Register Button */}
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full mb-4"
                  onClick={handleRegister}
                  disabled={spotsLeft === 0}
                >
                  {spotsLeft === 0 ? "Event Full" : "Register Now"}
                </Button>

                {/* Benefits */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">What you'll get:</div>
                  {["Instant QR entry pass", "Event reminders", "Certificate of participation"].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
