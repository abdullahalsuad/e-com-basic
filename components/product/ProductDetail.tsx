"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Star,
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  //   const { id } = useParams();
  const { id } = params;

  // Mock product data - in a real app, this would be fetched based on the ID
  const products = {
    1: {
      id: 1,
      name: "Premium Wireless Headphones",
      description:
        "Experience crystal-clear audio with our flagship wireless headphones featuring advanced noise cancellation technology, premium materials, and industry-leading battery life.",
      fullDescription: `These premium wireless headphones represent the pinnacle of audio engineering, combining cutting-edge technology with exceptional comfort. Featuring active noise cancellation that adapts to your environment, these headphones deliver an immersive listening experience whether you're commuting, working, or relaxing.

The headphones boast a 30-hour battery life with fast charging capabilities, ensuring your music never stops. Premium materials including soft-touch plastics and memory foam ear cushions provide all-day comfort, while the foldable design makes them perfect for travel.`,
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviewCount: 1247,
      category: "Electronics",
      brand: "AudioTech",
      inStock: true,

      features: [
        "Advanced Active Noise Cancellation",
        "30-hour battery life",
        "Quick charge: 10 minutes = 3 hours",
        "Premium memory foam cushions",
        "Bluetooth 5.0 connectivity",
        "Built-in microphone for calls",
        "Foldable design for portability",
        "Multiple device pairing",
      ],
      specifications: {
        "Driver Size": "40mm",
        "Frequency Response": "20Hz - 20kHz",
        Impedance: "32 Ohm",
        Sensitivity: "110dB",
        Weight: "250g",
        Connectivity: "Bluetooth 5.0, 3.5mm jack",
        "Charging Port": "USB-C",
      },
    },
    2: {
      id: 2,
      name: "Smart Fitness Tracker",
      description:
        "Track your health and fitness goals with advanced sensors and AI-powered insights for better wellness.",
      fullDescription: `This advanced fitness tracker combines cutting-edge health monitoring with intelligent insights to help you achieve your wellness goals. With 24/7 heart rate monitoring, sleep tracking, and comprehensive activity detection, it's your personal health companion.

The tracker features a bright, always-on display and week-long battery life. Water-resistant design allows you to wear it anywhere, while smart notifications keep you connected without being overwhelming.`,
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviewCount: 892,
      category: "Fitness",
      brand: "FitTech",
      inStock: true,

      features: [
        "24/7 Heart Rate Monitor",
        "Advanced Sleep Tracking",
        "7-day Battery Life",
        "Water Resistant (50m)",
        "Built-in GPS",
        "Smart Notifications",
        "Activity Auto-Detection",
        "Health Insights & Tips",
      ],
      specifications: {
        Display: "1.4 inch AMOLED",
        "Battery Life": "7 days",
        "Water Resistance": "5ATM",
        Sensors: "Heart Rate, GPS, Accelerometer",
        Connectivity: "Bluetooth 5.0",
        Compatibility: "iOS & Android",
        Weight: "45g",
      },
    },
    3: {
      id: 3,
      name: "Ergonomic Desk Setup",
      description:
        "Transform your workspace with our complete ergonomic desk solution for enhanced productivity and comfort.",
      fullDescription: `This complete ergonomic desk setup is designed to revolutionize your work experience. The height-adjustable desk seamlessly transitions between sitting and standing positions, promoting better posture and increased energy throughout the day.

Crafted from premium materials with integrated cable management, this desk combines functionality with style. The spacious surface accommodates multiple monitors while maintaining a clean, organized appearance that enhances any workspace.`,
      price: 899.99,
      originalPrice: 1099.99,
      rating: 4.7,
      reviewCount: 456,
      category: "Furniture",
      brand: "WorkSpace Pro",
      inStock: true,

      features: [
        "Height Adjustable (28-48 inches)",
        "Premium Oak Wood Surface",
        "Integrated Cable Management",
        "Memory Position Settings",
        "Anti-Collision Technology",
        "Quiet Motor Operation",
        "Large Work Surface (60x30 inches)",
        "Easy Assembly",
      ],
      specifications: {
        Dimensions: '60" x 30" x 28-48"',
        "Weight Capacity": "200 lbs",
        Material: "Oak Wood Top, Steel Frame",
        Motor: "Dual Motor System",
        "Noise Level": "<50dB",
        Speed: "1.5 inches/second",
        Power: "110V-240V",
      },
    },
  };

  const product =
    products[parseInt(id || "1") as keyof typeof products] || products[1];

  const handleAddToCart = () => {
    // toast({
    //   title: "Added to Cart",
    //   description: `${product.name} has been added to your cart.`,
    // });
  };

  const handleAddToWishlist = () => {
    // toast({
    //   title: "Added to Wishlist",
    //   description: `${product.name} has been saved to your wishlist.`,
    // });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-smooth">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-primary transition-smooth"
            >
              Products
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden">
                <Image
                  src=""
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-muted rounded-lg opacity-60 hover:opacity-100 transition-smooth cursor-pointer overflow-hidden"
                  >
                    <Image
                      src=""
                      alt={`${product.name} view ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="secondary" className="mb-4">
                {product.category}
              </Badge>

              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${product.price}
                </span>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                  <Truck className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Free Shipping</div>
                    <div className="text-xs text-muted-foreground">
                      Orders over $50
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">2 Year Warranty</div>
                    <div className="text-xs text-muted-foreground">
                      Full coverage
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                  <RotateCcw className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Easy Returns</div>
                    <div className="text-xs text-muted-foreground">
                      30-day policy
                    </div>
                  </div>
                </div>
              </div>

              {/* des */}
              <div className="grid grid-cols-1   mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed whitespace-pre-line">
                      {product.fullDescription}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
