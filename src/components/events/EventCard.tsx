import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Event } from "@/types/event";
import { cn } from "@/lib/utils";

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  event: Event;
}

const typeColors: Record<string, string> = {
  workshop: "info",
  seminar: "warning",
  cultural: "accent",
  sports: "success",
  technical: "default",
  other: "secondary",
};

export function EventCard({ event, className, ...props }: EventCardProps) {
  const spotsLeft = event.capacity - event.registered;
  const fillPercentage = (event.registered / event.capacity) * 100;

  return (
    <Card variant="interactive" className={cn("overflow-hidden group", className)} {...props}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Type Badge */}
        <Badge
          variant={typeColors[event.type] as any}
          className="absolute top-4 left-4"
        >
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </Badge>

        {/* Featured Badge */}
        {event.isFeatured && (
          <Badge variant="accent" className="absolute top-4 right-4">
            Featured
          </Badge>
        )}

        {/* Date Overlay */}
        <div className="absolute bottom-4 left-4 text-primary-foreground">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-5 space-y-4">
        {/* Title */}
        <h3 className="font-display font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        {/* Meta Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{event.registered} registered</span>
            </div>
            <span className={cn(
              "font-medium",
              spotsLeft <= 10 ? "text-destructive" : "text-accent"
            )}>
              {spotsLeft} spots left
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                fillPercentage >= 90 ? "bg-destructive" : "gradient-accent"
              )}
              style={{ width: `${fillPercentage}%` }}
            />
          </div>
        </div>

        {/* Action */}
        <Button variant="outline" className="w-full group/btn" asChild>
          <Link to={`/events/${event.id}`}>
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
