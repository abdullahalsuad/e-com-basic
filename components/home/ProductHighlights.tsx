"use client";

import { useEffect, useState } from "react";
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
import { Star, ArrowRight, Download, Shield, ZapIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// TypeScript interface for product
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  img: string;
  createdAt: string;
}

const ProductHighlights = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch featured products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products/featured");
        const data = await res.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Failed to fetch featured products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const features = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Instant Download",
      description: "Get access immediately after purchase",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Purchase",
      description: "Encrypted payment & private access",
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: "Lifetime Updates",
      description: "Free updates forever for your license",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular products, carefully selected for quality
            and innovation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            <p className="col-span-3 text-center text-muted-foreground">
              Loading products...
            </p>
          ) : featuredProducts.length === 0 ? (
            <p className="col-span-3 text-center text-muted-foreground">
              No featured products found.
            </p>
          ) : (
            featuredProducts.map((product) => (
              <Card
                key={product._id}
                className="border border-border bg-card hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-4 relative">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.img || "https://via.placeholder.com/600"}
                      alt={product.name}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-foreground">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <Badge variant="outline" className="text-xs">
                      Featured
                    </Badge>
                  </div>
                  <div className="text-xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    size="lg"
                    asChild
                    className="w-full bg-gradient-to-br from-slate-700 to-gray-950 dark:text-white py-2"
                  >
                    <Link
                      href={`/products/${product._id}`}
                      className="flex items-center justify-center gap-1.5"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        {/* Features */}
        <section className="my-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 ">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white mb-3">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" asChild>
              <Link
                href="/products"
                className="flex items-center gap-2 bg-gradient-to-br from-slate-700 to-gray-950 dark:text-white"
              >
                View All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductHighlights;
