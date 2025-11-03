"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, Loader2 } from "lucide-react";

function LibraryBanner() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    // 🔍 Fetch Books from Google Books API
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            setShowResults(false);
            return;
        }

        const debounce = setTimeout(() => {
            setLoading(true);
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=8`)
                .then((res) => res.json())
                .then((data) => {
                    setResults(data.items || []);
                    setShowResults(true);
                })
                .catch((err) => console.error("Error fetching books:", err))
                .finally(() => setLoading(false));
        }, 600);

        return () => clearTimeout(debounce);
    }, [query]);

    return (
        <section className="relative bg-[#595635] text-white py-20 overflow-visible">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80')",
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Welcome to <span className="text-teal-400">Green Library</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-lg text-gray-200 mb-10"
                >
                    Discover, Read, and Explore thousands of books in one place.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="relative w-full max-w-xl mx-auto"
                >
                    <SearchIcon
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300"
                        size={22}
                    />

                    <input
                        type="search"
                        placeholder="Search for your favorite book..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-white/10 text-white placeholder-gray-300 rounded-2xl py-4 pl-14 pr-4 outline-none border border-white/20
             focus:border-teal-400 focus:ring-2 focus:ring-teal-500 transition-all duration-200 backdrop-blur-sm"
                    />

                    {/* Loading spinner */}
                    {loading && (
                        <Loader2
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-teal-400 animate-spin"
                            size={20}
                        />
                    )}
                </motion.div>
            </div>

            {/* Search Results Section (fixed below banner) */}
            {showResults && results.length > 0 && (
                <div className="relative z-20 mt-10 px-4">
                    <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Search Results for <span className="text-teal-600">"{query}"</span> 🔍
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                            {results.map((book) => {
                                const info = book.volumeInfo;
                                return (
                                    <a
                                        key={book.id}
                                        href={info.infoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition p-3 text-gray-800 flex flex-col items-center"
                                    >
                                        <img
                                            src={
                                                info.imageLinks?.thumbnail ||
                                                "https://via.placeholder.com/120x160?text=No+Image"
                                            }
                                            alt={info.title}
                                            className="w-24 h-32 object-cover rounded-md mb-3"
                                        />
                                        <h4 className="text-sm font-semibold text-center line-clamp-2">
                                            {info.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 line-clamp-1">
                                            {info.authors?.join(", ") || "Unknown Author"}
                                        </p>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Decorative Bottom Shape */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[70px]"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.45,168.19-17.67,250.45-.39,65.7,13.67,128.06,37.29,192.9,52.29C1023.78,94.6,1108.9,97.34,1200,75.13V120H0V95.8A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-[#4b492f]"
                    ></path>
                </svg>
            </div>
        </section>
    );
}

export default LibraryBanner;
