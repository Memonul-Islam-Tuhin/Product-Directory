import { FilterX, RotateCcw, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useStrapi } from "../context/StrapiContext";
import NeoInput from "../components/NeoInput";
import ProductCard from "../components/ProductCard";
import NeoButton from "../components/NeoButton";
const Directory = () => {
  const { products, loading, error } = useStrapi();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...new Set(products.map((product) => product.category).filter(Boolean)),
    ],
    [products],
  );

  const filteredProducts = products.filter((product) => {
    const q = search.trim().toLowerCase();
    const matchesCategory =
      selectedCategory === "All" ||
      product.category?.trim().toLowerCase() ===
        selectedCategory.trim().toLowerCase();
    const matchesSearch =
      product.name?.toLowerCase().includes(q) ||
      product.description?.toLowerCase().includes(q) ||
      product.category?.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
  };
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="bg-neo-teal border-4 border-black p-8 sm:p-12 shadow-neo-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-neo-pink border-4 border-black rotate-12 z-0 opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase leading-none tracking-tight mb-4">
            Find your next favorite product.
          </h2>
          <p className="font-sans font-extrabold text-black text-base sm:text-lg mb-6 leading-relaxed">
            Browse, search and save products you love. Everything here is
            managed from a Strapi CMS.
          </p>
          <div className="flex flex-wrap gap-2 text-xs uppercase font-display font-black text-black">
            <span className="bg-white border-2 border-black px-3 py-1 shadow-neo-sm">
              {products.length} Products
            </span>
            <span className="bg-neo-yellow border-2 border-black px-3 py-1 shadow-neo-sm">
              {Math.max(categories.length - 1, 0)} Categories
            </span>
          </div>
        </div>
      </section>
      {/* Search and filters */}
      <section className="bg-white border-4 border-black p-6 shadow-neo space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:max-w-md">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <NeoInput
              id="search"
              placeholder="Search by name or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={Search}
            />
          </div>

          {(search || selectedCategory !== "All") && (
            <NeoButton
              variant="white"
              size="sm"
              onClick={handleResetFilters}
              className="w-full md:w-auto"
            >
              <RotateCcw className="w-4 h-4 stroke-3" />
              <span>Reset Filters</span>
            </NeoButton>
          )}
        </div>

        <div className="flex flex-wrap gap-2 border-t-2 border-dashed border-black pt-4">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-display font-black text-sm uppercase border-2 border-black transition-all shadow-neo-sm hover:translate-y-0.5 active:translate-y-1 ${
                  isActive
                    ? "bg-neo-yellow text-black"
                    : "bg-white text-black hover:bg-neo-gray"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>
      {/* Products */}
      <section>
        {error && (
          <div className="bg-neo-pink border-4 border-black p-4 mb-8 shadow-neo-sm font-display font-black uppercase text-sm">
            {error}
          </div>
        )}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white border-4 border-black shadow-neo-lg p-5 space-y-4 animate-pulse"
              >
                <div className="bg-neo-gray border-b-4 border-black h-48 -mx-5 -mt-5"></div>
                <div className="h-6 bg-neo-gray border-2 border-black w-2/3"></div>
                <div className="h-8 bg-neo-gray border-2 border-black w-1/3"></div>
                <div className="h-12 bg-neo-gray border-2 border-black w-full"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white border-4 border-black p-12 text-center shadow-neo-lg max-w-xl mx-auto space-y-6">
            <div className="mx-auto w-16 h-16 border-4 border-black bg-neo-pink flex items-center justify-center shadow-neo-sm">
              <FilterX className="w-8 h-8 stroke-3 text-black" />
            </div>
            <div>
              <h3 className="font-display font-black text-2xl uppercase mb-2">
                No Products Found
              </h3>
              <p className="text-neo-muted font-sans font-bold text-sm">
                {products.length === 0
                  ? "No products yet. Add and publish some in your Strapi admin."
                  : `Nothing matches "${search}" in ${selectedCategory}. Try clearing your filters.`}
              </p>
            </div>
            {products.length > 0 && (
              <NeoButton
                variant="yellow"
                size="md"
                onClick={handleResetFilters}
                className="mx-auto"
              >
                <span>View All Products</span>
              </NeoButton>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Directory;
