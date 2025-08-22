"use client";

import { User, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

interface NavbarProps {
  sideMenu: boolean;
}

const Navbar = ({ sideMenu }: NavbarProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-300/40 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gray-900 dark:bg-white bg-clip-text text-transparent"
          >
            ProductHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium text-black/80 dark:text-white/80 hover:text-teal-400 transition-colors ${
                isActive("/") && "text-teal-400 font-semibold"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`font-medium text-black/80 dark:text-white/80 hover:text-teal-400 transition-colors ${
                isActive("/products") && "text-teal-400 font-semibold"
              }`}
            >
              Products
            </Link>
            <Link
              href="/dashboard/add-product"
              className={`font-medium text-black/80 dark:text-white/80 hover:text-teal-400 transition-colors ${
                isActive("/dashboard/add-product") &&
                "text-teal-400 font-semibold"
              }`}
            >
              Add product
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <ModeToggle />

            {status === "authenticated" ? (
              // Show profile image and logout when logged in
              <div className="flex items-center space-x-3">
                <Image
                  src={session.user?.image || "https://via.placeholder.com/32"}
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-8 h-8 rounded-full border border-teal-400 cursor-pointer"
                />

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-black/80 dark:text-white/80 hover:text-red-500"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              // Show login button if not authenticated and sideMenu is enabled
              sideMenu && (
                <Button
                  size="sm"
                  asChild
                  className="bg-white text-slate-900 hover:bg-gray-200 text-sm font-medium hidden md:flex"
                >
                  <Link href="/login" className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Link>
                </Button>
              )
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-white"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-gray-300/50 backdrop-blur-md rounded-lg border-t border-white/20 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-medium text-black/80 dark:text-white/80 ${
                  isActive("/") ? "text-teal-400 font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`font-medium text-black/80 dark:text-white/80 ${
                  isActive("/products") ? "text-teal-400 font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/dashboard/add-product"
                className={`font-medium text-black/80 dark:text-white/80 ${
                  isActive("/dashboard/add-product")
                    ? "text-teal-400 font-semibold"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Add product
              </Link>
              <div className="pt-2">
                {status === "authenticated" ? (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-full justify-start text-red-500 hover:text-red-600"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                ) : (
                  sideMenu && (
                    <Button
                      size="sm"
                      asChild
                      className="w-full bg-white text-slate-900 hover:bg-gray-200"
                    >
                      <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                        <User className="w-4 h-4 mr-2" />
                        Login
                      </Link>
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Accent Line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
