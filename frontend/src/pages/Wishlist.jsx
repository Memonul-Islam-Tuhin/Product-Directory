// import React from "react";
import { Link } from "react-router";
import { ArrowLeft, HeartOff } from "lucide-react";
import { useStrapi } from "../context/StrapiContext";
import ProductCard from "../components/ProductCard";
import NeoButton from "../components/NeoButton";
const Wishlist = () => {
  const { wishlist, guestId } = useStrapi();
  return (
    <div className="space-y-10">
      <section className="bg-neo-pink border-4 border-black p-8 sm:p-12 shadow-neo-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-neo-yellow border-4 border-black rotate-12 z-0 opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Link
              to="/"
              className="hover:underline flex items-center gap-1 font-display font-black text-xs uppercase text-black"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-3" />
              <span>Back to Catalog</span>
            </Link>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase leading-none tracking-tight mb-4">
            Your wishlist.
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="bg-white border-2 border-black px-3 py-1 font-display font-black text-xs uppercase shadow-neo-sm">
              Profile ID: {guestId || "Generating..."}
            </span>
            <span className="bg-neo-teal border-2 border-black px-3 py-1 font-display font-black text-xs uppercase shadow-neo-sm">
              Items: {wishlist.length}
            </span>
          </div>
        </div>
      </section>
      <section>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white border-4 border-black p-12 text-center shadow-neo-lg max-w-xl mx-auto space-y-6">
            <div className="mx-auto w-16 h-16 border-4 border-black bg-neo-yellow flex items-center justify-center shadow-neo-sm">
              <HeartOff className="w-8 h-8 stroke-3 text-black" />
            </div>
            <div>
              <h3 className="font-display font-black text-2xl uppercase mb-2">
                Your Wishlist is Empty
              </h3>
              <p className="text-neo-muted font-sans font-bold text-sm">
                You haven't saved any products yet. Go back to the catalog and
                save the ones you like.
              </p>
            </div>
            <Link to="/" className="inline-block">
              <NeoButton variant="teal" size="md">
                <span>Browse Products</span>
              </NeoButton>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Wishlist;
