/* eslint-disable react-hooks/immutability */
import { createContext, useContext, useEffect, useState } from "react";

const API_URL =
  import.meta.env.VITE_STRAPI_API_URL || "http://localhost:1337/api";
const BASE_URL = API_URL.replace(/\/api\/?$/, "");

const StrapiContext = createContext(null);

const toImageUrl = (image) => {
  if (!image?.url) return "";
  return image.url.startsWith("http") ? image.url : `${BASE_URL}${image.url}`;
};

const mapProduct = (item) => ({
  id: item.documentId,
  name: item.name,
  price: item.price,
  description: item.description,
  category: item.category,
  image: toImageUrl(item.image),
  rating: item.rating,
  inStock: item.inStock ?? true,
  features: Array.isArray(item.features) ? item.features : [],
  link: item.link || "",
});

export const StrapiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [guestId] = useState(() => {
    let id = localStorage.getItem("producthub_guest_id");
    if (!id) {
      id = `guest_${Math.random().toString(36).substring(2, 11)}`;
      localStorage.setItem("producthub_guest_id", id);
    }
    return id;
  });

  useEffect(() => {
    getProducts();
    getWishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 1. Get all products from Strapi
  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}/products?populate=*&pagination[pageSize]=100`,
      );
      if (!res.ok) throw new Error(`Strapi responded with ${res.status}`);
      const json = await res.json();
      setProducts(json.data.map(mapProduct));
      setError("");
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Could not load products. Is Strapi running?");
    } finally {
      setLoading(false);
    }
  };

  // 2. Get this guest's wishlist from Strapi
  const getWishlist = async () => {
    try {
      const res = await fetch(
        `${API_URL}/wishlist-items?filters[guestId][$eq]=${guestId}&populate[product][populate]=image`,
      );
      if (!res.ok) throw new Error(`Strapi responded with ${res.status}`);
      const json = await res.json();

      const items = json.data
        .filter((item) => item.product)
        .map((item) => ({
          ...mapProduct(item.product),
          wishlistItemId: item.documentId,
        }));

      setWishlist(items);
    } catch (err) {
      console.error("Error loading wishlist:", err);
    }
  };

  // 3. Add to wishlist
  const addToWishlist = async (product) => {
    if (isInWishlist(product.id)) return;
    try {
      const res = await fetch(`${API_URL}/wishlist-items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { guestId, product: product.id } }),
      });
      if (res.ok) getWishlist();
    } catch (err) {
      console.error("Error adding to wishlist:", err);
    }
  };

  // 4. Remove from wishlist
  const removeFromWishlist = async (productId) => {
    const item = wishlist.find((i) => i.id === productId);
    if (!item) return;
    try {
      const res = await fetch(
        `${API_URL}/wishlist-items/${item.wishlistItemId}`,
        {
          method: "DELETE",
        },
      );
      if (res.ok) setWishlist((prev) => prev.filter((i) => i.id !== productId));
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);

  return (
    <StrapiContext.Provider
      value={{
        products,
        wishlist,
        guestId,
        loading,
        error,
        getProducts,
        getWishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </StrapiContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStrapi = () => useContext(StrapiContext);
