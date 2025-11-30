import { Link } from "react-router-dom";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-background">
                CampusConnect
              </span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Connecting students with campus events. Discover, register, and participate in the best college experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Events", "Dashboard", "About Us"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Types */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Event Types</h4>
            <ul className="space-y-2">
              {["Workshops", "Seminars", "Cultural", "Sports", "Technical"].map((type) => (
                <li key={type}>
                  <Link
                    to={`/events?type=${type.toLowerCase()}`}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <Mail className="w-4 h-4" />
                <span>events@campus.edu</span>
              </li>
              <li className="flex items-center gap-3 text-background/60 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-background/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 University Ave,<br />Campus City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2024 CampusConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-background/40 hover:text-background/60 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/40 hover:text-background/60 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
