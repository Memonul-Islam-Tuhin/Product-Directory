import {
  Heart,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  ShieldAlert,
  Star,
} from "lucide-react";
import { Link } from "react-router";
import { useParams } from "react-router";
import NeoButton from "../components/NeoButton";
import { useStrapi } from "../context/StrapiContext";
import { getCategoryColor } from "../utils";
const ProductDetail = () => {
  const { id } = useParams();
  const { products, loading, addToWishlist, removeFromWishlist, isInWishlist } =
    useStrapi();

  const product = products.find((p) => p.id === id);
  const wishlisted = product ? isInWishlist(product.id) : false;

  const handleWishlistToggle = () => {
    if (!product) return;
    if (!wishlisted) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  if (loading) {
    return (
      <div className="h-96 bg-neo-gray border-4 border-black shadow-neo-lg animate-pulse" />
    );
  }

  if (!product) {
    return (
      <div className="bg-white border-4 border-black p-12 text-center shadow-neo-lg max-w-xl mx-auto space-y-6 my-12">
        <div className="mx-auto w-16 h-16 border-4 border-black bg-neo-pink flex items-center justify-center shadow-neo-sm">
          <ShieldAlert className="w-8 h-8 stroke-3 text-black" />
        </div>
        <div>
          <h3 className="font-display font-black text-2xl uppercase mb-2">
            Product Not Found
          </h3>
          <p className="text-neo-muted font-sans font-bold text-sm">
            We couldn't find a product with ID "{id}". It may have been removed.
          </p>
        </div>
        <Link to="/" className="inline-block">
          <NeoButton variant="yellow" size="md">
            <span>Back to Catalog</span>
          </NeoButton>
        </Link>
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border-3 border-black bg-white hover:bg-neo-gray px-4 py-2 font-display font-black text-sm uppercase shadow-neo-sm hover:translate-y-0.5 active:translate-y-1 transition-all"
        >
          <ArrowLeft className="w-4 h-4 stroke-3" />
          <span>Back to Catalog</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        {/* Image */}
        <div className="lg:col-span-6">
          <div className="bg-white border-4 border-black shadow-neo-lg p-3 group overflow-hidden">
            <div className="relative border-4 border-black aspect-square overflow-hidden bg-neo-gray">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              {product.category && (
                <span
                  className={`absolute top-4 left-4 border-2 border-black px-3 py-1 font-display font-black text-xs uppercase shadow-neo-sm ${getCategoryColor(product.category)}`}
                >
                  {product.category}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase leading-none tracking-tight">
              {product.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <div className="font-display font-black text-3xl sm:text-4xl text-black bg-neo-yellow border-3 border-black px-4 py-1 shadow-neo-sm">
                ${product.price}
              </div>
              <span
                className={`border-2 border-black px-3 py-1 font-display font-black text-xs uppercase ${product.inStock ? "bg-neo-teal" : "bg-neo-gray opacity-60"}`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
              {product.rating != null && (
                <span className="flex items-center gap-1 border-2 border-black bg-white px-3 py-1 font-display font-black text-xs uppercase shadow-neo-sm">
                  <Star className="w-4 h-4 fill-neo-yellow stroke-3" />
                  {product.rating}
                </span>
              )}
            </div>
            <p className="">{product.description}</p>
            {product.features.length > 0 && (
              <div className="border-t-3 border-dashed border-black pt-4">
                <h3 className="font-display font-black text-lg uppercase mb-3">
                  Key Features:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 font-sans font-bold text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-neo-green stroke-3 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t-4 border-black">
            <NeoButton
              variant={wishlisted ? "pink" : "white"}
              size="md"
              onClick={handleWishlistToggle}
              className="flex-1"
            >
              <Heart
                className={`w-5 h-5 stroke-3 ${wishlisted ? "fill-white text-white" : "text-black"}`}
              />
              <span>{wishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
            </NeoButton>

            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex"
              >
                <NeoButton variant="teal" size="md" className="w-full">
                  <ExternalLink className="w-5 h-5 stroke-3" />
                  <span>Visit Product</span>
                </NeoButton>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
