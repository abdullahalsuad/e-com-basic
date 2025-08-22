import ProductDetail from "@/components/product/ProductDetail";

interface ProductDetailsPageProps {
  params: { id: string };
}

const ProductDetailsPage = ({ params }: ProductDetailsPageProps) => {
  return <ProductDetail params={params} />;
};

export default ProductDetailsPage;
