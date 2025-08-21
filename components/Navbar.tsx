"use client";

import { ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-smooth"
          >
            ProductHub
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-smooth hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`font-medium transition-smooth hover:text-primary ${
                isActive("/products") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Products
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/products">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Browse
              </Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Link href="/login">
                <User className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
