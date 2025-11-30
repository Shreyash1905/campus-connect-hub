import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";
import { Event } from "@/types/event";

interface FeaturedEventProps {
  event: Event;
}

export function FeaturedEvent({ event }: FeaturedEventProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-center max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="accent" className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Featured Event
          </Badge>
          <Badge variant="secondary" className="bg-background/20 text-background border-background/30">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">
          {event.title}
        </h2>

        <p className="text-background/80 text-lg mb-6 line-clamp-2">
          {event.description}
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-8 text-background/80">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>{event.capacity - event.registered} spots left</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to={`/events/${event.id}`}>
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="glass" size="lg" className="bg-background/10 text-background border-background/20 hover:bg-background/20" asChild>
            <Link to={`/events/${event.id}`}>
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
