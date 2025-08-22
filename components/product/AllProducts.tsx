"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Mock products data
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description:
        "Experience crystal-clear audio with our flagship wireless headphones featuring advanced noise cancellation technology.",
      price: 299.99,
      rating: 4.9,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      description:
        "Track your health and fitness goals with advanced sensors and AI-powered insights for better wellness.",
      price: 199.99,
      rating: 4.8,
      category: "Fitness",
    },
    {
      id: 3,
      name: "Ergonomic Desk Setup",
      description:
        "Transform your workspace with our complete ergonomic desk solution for enhanced productivity and comfort.",
      price: 899.99,
      rating: 4.7,
      category: "Furniture",
    },
    {
      id: 4,
      name: "Professional Camera Kit",
      description:
        "Capture stunning photos and videos with this professional-grade camera kit including lenses and accessories.",
      price: 1299.99,
      rating: 4.9,
      category: "Photography",
    },
    {
      id: 5,
      name: "Smart Home Hub",
      description:
        "Control your entire smart home ecosystem with this advanced hub featuring voice control and app integration.",
      price: 149.99,
      rating: 4.6,
      category: "Smart Home",
    },
    {
      id: 6,
      name: "Wireless Gaming Mouse",
      description:
        "Precision gaming mouse with customizable RGB lighting and ultra-responsive sensors for competitive gaming.",
      price: 79.99,
      rating: 4.8,
      category: "Gaming",
    },
  ];

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our complete collection of premium products designed to
                enhance your lifestyle.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-card transition-smooth"
                >
                  <CardHeader>
                    <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                      <Image
                        src=""
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {product.category}
                        </Badge>
                        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                          {product.name}
                        </CardTitle>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {product.description}
                    </CardDescription>
                    <div className="text-2xl font-bold text-primary">
                      ${product.price}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" asChild className="w-full">
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No products found matching your search.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllProducts;
