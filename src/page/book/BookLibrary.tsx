"use client";
import LibraryBanner from "@/components/module/LibraryBanner";
import { useEffect, useState } from "react";

// Type definitions for Google Books API
interface VolumeInfo {
    title: string;
    authors?: string[];
    imageLinks?: {
        thumbnail?: string;
    };
    infoLink: string;
}

interface BookItem {
    id: string;
    volumeInfo: VolumeInfo;
}

function BookLibrary() {
    const [books, setBooks] = useState<BookItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=40")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.items || []);
            })
            .catch((err) => console.error("Error fetching books:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <LibraryBanner />
            <section className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">📚 Library</h2>

                {loading ? (
                    <p className="text-center text-gray-500">Loading books...</p>
                ) : books.length === 0 ? (
                    <p className="text-center text-gray-500">No books found 😢</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {books.map((book: BookItem) => {
                            const info = book.volumeInfo;
                            return (
                                <div
                                    key={book.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                                >
                                    <img
                                        src={
                                            info.imageLinks?.thumbnail ||
                                            "https://via.placeholder.com/150x200?text=No+Image"
                                        }
                                        alt={info.title || "No title"}
                                        className="w-full h-52 object-cover"
                                    />
                                    <div className="p-3">
                                        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                                            {info.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 line-clamp-1">
                                            {info.authors?.join(", ") || "Unknown Author"}
                                        </p>
                                        <a
                                            href={info.infoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block mt-2 text-xs text-teal-600 font-medium hover:underline"
                                        >
                                            View Details →
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </>
    );
}

export default BookLibrary;
