"use client";

import { ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  bg-gray-300/40 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Fixed Gradient (Visible on Dark) */}
          <Link
            href="/"
            className="text-2xl font-bold  bg-gray-900 
                       bg-clip-text text-transparent"
          >
            ProductHub
          </Link>

          {/* Desktop Navigation - Fixed Text Color */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium text-black/80 hover:text-white transition-colors ${
                isActive("/") && "text-teal-400 font-semibold"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`font-medium text-black/80 hover:text-white transition-colors ${
                isActive("/products") && "text-teal-400 font-semibold"
              }`}
            >
              Products
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <ModeToggle />

            <Button
              size="sm"
              asChild
              className="bg-white text-slate-900 hover:bg-gray-200 text-sm font-medium"
            >
              <Link href="/login" className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
