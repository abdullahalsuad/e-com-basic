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

const ProductHighlights = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description:
        "Experience crystal-clear audio with our flagship wireless headphones featuring noise cancellation.",
      price: 299.99,
      rating: 4.9,
      badge: "Bestseller",
      features: ["Noise Cancellation", "30h Battery", "Premium Build"],
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      description:
        "Track your health and fitness goals with advanced sensors and AI-powered insights.",
      price: 199.99,
      rating: 4.8,
      badge: "New",
      features: ["Heart Rate Monitor", "Sleep Tracking", "Waterproof"],
    },
    {
      id: 3,
      name: "Ergonomic Desk Setup",
      description:
        "Transform your workspace with our complete ergonomic desk solution for better productivity.",
      price: 899.99,
      rating: 4.7,
      badge: "Premium",
      features: ["Height Adjustable", "Cable Management", "Premium Materials"],
    },
  ];

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
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="border border-border bg-card hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4 relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.pexels.com/photos/1666315/pexels-photo-1666315.jpeg" // leave empty, you said so
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-foreground">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.map((feature, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="text-xl font-bold text-primary">
                  ${product.price}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-br from-slate-700   to-gray-950 dark:text-white py-2"
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="flex items-center justify-center gap-1.5"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
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
                className="flex items-center gap-2 bg-gradient-to-br from-slate-700   to-gray-950 dark:text-white"
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
