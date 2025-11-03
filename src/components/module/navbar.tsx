"use client";
import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Writers", path: "/writer" },
        { name: "Categories", path: "/category-section" },
        { name: "Books", path: "/library" },
        { name: "Contact", path: "/contact" },
        { name: "Library", path: "/pdf-book" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#595635] text-white shadow-md backdrop-blur-sm bg-opacity-95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 28 24"
                            className="h-8 w-8 text-teal-400 group-hover:scale-110 transition-transform"
                        >
                            <path
                                fill="currentColor"
                                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147H19.81H19.67H19.37C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147H7.72H7.58H7.28C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41Z"
                            />
                        </svg>
                        <span className="font-bold text-xl tracking-wide">BookVerse</span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="hover:text-teal-400 transition-colors font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            to="/login"
                            className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-medium transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full text-sm font-medium transition"
                        >
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden bg-white/10 p-2 rounded-md hover:bg-white/20 transition"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#4b492f] ${isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 flex flex-col gap-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-teal-400 text-base font-medium transition"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
                        <Link
                            to="/login"
                            className="block text-center bg-teal-600 hover:bg-teal-500 text-white rounded-full py-2 text-sm font-medium transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="block text-center bg-white/10 hover:bg-white/20 text-white rounded-full py-2 text-sm font-medium transition"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
