import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockEvents } from "@/data/mockEvents";
import { 
  Calendar, 
  QrCode, 
  Clock, 
  MapPin, 
  Ticket,
  CheckCircle,
  LayoutDashboard,
  User
} from "lucide-react";

// Simulated registered events (in real app, this comes from the backend)
const registeredEventIds = ["1", "4", "5"];
const registeredEvents = mockEvents.filter((e) => registeredEventIds.includes(e.id));

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="info" className="mb-3">
              <LayoutDashboard className="w-3 h-3 mr-1" />
              Dashboard
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              My Events
            </h1>
            <p className="text-muted-foreground">
              Manage your registrations and access your event passes
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card variant="glass">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Ticket className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{registeredEvents.length}</div>
                  <div className="text-sm text-muted-foreground">Registered Events</div>
                </div>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-muted-foreground">Events Attended</div>
                </div>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{registeredEvents.length}</div>
                  <div className="text-sm text-muted-foreground">Upcoming Events</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="passes">My Passes</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {registeredEvents.length > 0 ? (
                registeredEvents.map((event) => (
                  <Card key={event.id} variant="interactive">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-48 h-40 md:h-auto shrink-0">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <Badge variant="success" className="mb-2">Registered</Badge>
                              <h3 className="font-display text-lg font-semibold">
                                {event.title}
                              </h3>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Button variant="default" size="sm" asChild>
                              <Link to={`/events/${event.id}`}>
                                View Details
                              </Link>
                            </Button>
                            <Button variant="accent" size="sm">
                              <QrCode className="w-4 h-4 mr-2" />
                              Show Pass
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card variant="outline" className="text-center py-12">
                  <CardContent>
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">No Registered Events</h3>
                    <p className="text-muted-foreground mb-4">
                      You haven't registered for any events yet.
                    </p>
                    <Button asChild>
                      <Link to="/events">Browse Events</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="past">
              <Card variant="outline" className="text-center py-12">
                <CardContent>
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">No Past Events</h3>
                  <p className="text-muted-foreground">
                    Your attended events will appear here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="passes" className="space-y-4">
              {registeredEvents.map((event) => (
                <Card key={event.id} variant="elevated" className="overflow-hidden">
                  <div className="gradient-primary p-6 text-primary-foreground">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm opacity-80 mb-1">EVENT PASS</div>
                        <h3 className="font-display text-xl font-bold mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm opacity-80">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="w-24 h-24 bg-card rounded-xl flex items-center justify-center">
                        <QrCode className="w-16 h-16 text-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 bg-card flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>Student Name • ID: STU2024001</span>
                    </div>
                    <Badge variant="success">Valid</Badge>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
