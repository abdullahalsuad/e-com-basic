import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink as ExternalLinkIcon, // Renamed to avoid conflict
} from "lucide-react";
import Link from "next/link"; // ✅ Import Link from Next.js (or use react-router-dom's Link)

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent inline-block mb-4"
            >
              ProductHub
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Discover amazing products that enhance your lifestyle. Quality,
              innovation, and customer satisfaction are our top priorities.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Products
              </Link>
              <Link
                href="/login"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Help Center
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Returns & Exchanges
              </Link>
              <Link
                href="#"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Shipping Info
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@producthub.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ProductHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
