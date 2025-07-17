import React, { useState, useEffect } from "react";
import logo from "../../public/images/Maverickk_Jewels.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Header = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isSearchOpen]);

  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Failed to fetch product data", err));
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();

    const productMatches = allProducts.filter((product) =>
      product.title?.toLowerCase().includes(term) ||
      product.category?.toLowerCase().includes(term) ||
      product.brand?.toLowerCase().includes(term)
    );

    const categoryMatches = [
      ...new Set(
        productMatches
          .map((p) => p.category)
          .filter((cat) => cat?.toLowerCase().includes(term))
      ),
    ];

    setFilteredProducts(productMatches);
    setFilteredCategories(categoryMatches);
  }, [searchTerm, allProducts]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCount(favorites.length);
  }, []);

  useEffect(() => {
    setIsProductOpen(false);
    setIsDrawerOpen(false);
  }, [location.pathname]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  const isActive = (path) => location.pathname === path;
  const isCollection = () => location.pathname.startsWith("/collection");

  return (
    <>
      {!isSearchOpen && (
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className={`w-40 transition-transform duration-500 ${
                  isScrolled ? "scale-100" : "scale-75"
                }`}
              />
            </Link>

            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={`px-3 py-1 rounded-md transition ${isActive("/") ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>Home</Link>
              <Link to="/about" className={`px-3 py-1 rounded-md transition ${isActive("/about") ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>About</Link>

              <div
                className="relative group"
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
              >
                <button className={`flex items-center gap-1 px-3 py-1 rounded-md transition ${isCollection() ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>
                  Product
                  <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                {isProductOpen && (
                  <div className="absolute bg-white border rounded shadow-lg mt-0 space-y-1 p-4 z-50 w-40">
                    <Link to="/collection?category=earrings" className="block hover:font-bold" onClick={() => setIsProductOpen(false)}>1. Earrings</Link>
                    <Link to="/collection?category=rings" className="block hover:font-bold" onClick={() => setIsProductOpen(false)}>2. Rings</Link>
                    <Link to="/collection?category=necklaces" className="block hover:font-bold" onClick={() => setIsProductOpen(false)}>3. Necklaces</Link>
                    <Link to="/collection?category=bracelets" className="block hover:font-bold" onClick={() => setIsProductOpen(false)}>4. Bracelets</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className={`px-3 py-1 rounded-md transition ${isActive("/contact") ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <FiSearch className="text-xl cursor-pointer" onClick={openSearch} />
              <Link to="/wishlist" className="relative">
                <FiHeart className="text-xl cursor-pointer" />
              </Link>

              <div className="md:hidden">
                <button onClick={toggleDrawer}>
                  {isDrawerOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                </button>
              </div>
            </div>
          </div>

          {isDrawerOpen && (
            <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6 space-y-4">
              <Link to="/" className="block hover:font-bold" onClick={() => setIsDrawerOpen(false)}>Home</Link>
              <details className="block">
                <summary className="cursor-pointer hover:font-bold">Product</summary>
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/collection?category=earrings" className="block hover:font-bold" onClick={() => setIsDrawerOpen(false)}>1. Earrings</Link>
                  <Link to="/collection?category=rings" className="block hover:font-bold" onClick={() => setIsDrawerOpen(false)}>2. Rings</Link>
                  <Link to="/collection?category=necklaces" className="block hover:font-bold" onClick={() => setIsDrawerOpen(false)}>3. Necklaces</Link>
                  <Link to="/collection?category=bracelets" className="block hover:font-bold" onClick={() => setIsDrawerOpen(false)}>4. Bracelets</Link>
                </div>
              </details>
              <Link to="/about" className="block hover:font-bold" onClick={() => setIsDrawerOpen(false)}>About</Link>
              <Link to="/contact" className="block hover:font-bold" onClick={() => setIsDrawerOpen(false)}>Contact</Link>
            </div>
          )}
        </header>
      )}

      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Search Overlay UI content here */}
        </div>
      )}
    </>
  );
};

export default Header;
