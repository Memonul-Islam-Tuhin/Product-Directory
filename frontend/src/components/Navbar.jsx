// import React from "react";
import { NavLink, Link } from "react-router";
import { Heart, LayoutGrid } from "lucide-react";
import { useStrapi } from "../context/StrapiContext";

const Navbar = () => {
  const { wishlist } = useStrapi();

  const linkClass =
    (activeColor) =>
    ({ isActive }) =>
      `flex items-center gap-2 border-3 border-black px-4 py-2 font-display font-black text-sm uppercase transition-all shadow-neo-sm hover:translate-y-0.5 active:translate-y-1 ${
        isActive
          ? `${activeColor} text-black`
          : "bg-white text-black hover:bg-neo-gray"
      }`;
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-black px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="group">
          <h1 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter bg-neo-yellow text-black border-4 border-black px-4 py-1.5 shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-neo-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
            Product{" "}
            <span className="bg-black text-white px-2 py-0.5 ml-1">Hub</span>
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/" className={linkClass("bg-neo-yellow")}>
            <LayoutGrid className="w-4 h-4 stroke-3" />
            <span>Catalog</span>
          </NavLink>

          <NavLink to="/wishlist" className={linkClass("bg-neo-pink")}>
            <div className="relative">
              <Heart className="w-4 h-4 stroke-3" />
              {wishlist.length > 0 && (
                <span className="absolute -top-3.5 -right-3.5 bg-black text-neo-yellow text-[9px] font-black border-2 border-black rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>
            <span>Wishlist</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
