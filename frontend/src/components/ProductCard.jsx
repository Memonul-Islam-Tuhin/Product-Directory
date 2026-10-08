// import React from "react";
import { Link } from "react-router";
import { Heart, ArrowRight } from "lucide-react";
import { useStrapi } from "../context/StrapiContext";
import NeoButton from "./NeoButton";
import { getCategoryColor } from "../utils";
const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useStrapi();
  const wishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (wishlisted) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  return (
    <div className="bg-white border-4 border-black shadow-neo-lg hover:shadow-neo-xl hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 flex flex-col h-full relative group">
      <div className="relative border-b-4 border-black overflow-hidden h-52 bg-neo-gray">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-display font-black uppercase text-neo-muted">
            No image
          </div>
        )}

        {product.category && (
          <span
            className={`absolute top-4 left-4 border-2 border-black px-3 py-1 font-display font-black text-xs uppercase shadow-neo-sm ${getCategoryColor(product.category)}`}
          >
            {product.category}
          </span>
        )}

        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 p-2 border-2 border-black shadow-neo-sm hover:translate-y-0.5 transition-all bg-white text-black active:translate-y-1"
          aria-level={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-5 h-5 stroke-3 ${wishlisted ? "fill-neo-pink text-black" : "text-black"}`}
          />
        </button>
      </div>

      <div className="p-5 grow flex flex-col justify-between">
        <div>
          <h3 className="font-display font-black text-xl hover:text-neo-blue transition-colors mb-2">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <div className="font-display font-black text-2xl text-black mb-3">
            ${product.price}
          </div>
          <p className="text-neo-muted font-sans font-semibold text-sm line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>
        <div className="mt-auto">
          <Link to={`/products/${product.id}`} className="block w-full">
            <NeoButton
              variant="white"
              size="sm"
              className="w-full justify-between"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 stroke-3" />
            </NeoButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
