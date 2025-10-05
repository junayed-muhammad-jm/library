import type { ImageData } from "@/data/data";
import { Link } from "react-router";

function BooksCards({ product }: { product: ImageData }) {
    return (
        <div
            className="
                group
                bg-white 
                rounded-2xl 
                shadow-md 
                overflow-hidden 
                transition 
                transform 
                hover:-translate-y-2 
                hover:shadow-xl 
                cursor-pointer
                flex 
                flex-col
            "
        >
            {/* Image */}
            <div className="relative w-full h-72 overflow-hidden"> {/* height বৃদ্ধি করা হলো */}
                <Link to={product.src}>   <img
                    src={product.image}
                    alt={product.name}
                    className="
                        w-full 
                        h-full 
                        object-cover 
                        transition-transform 
                        duration-500 
                        group-hover:scale-110
                    "
                /></Link>
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-between p-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
                    {product.writer}
                </h3>
                <h3 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
                    {product.name}
                </h3>

                <a
                    href={product.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                                mt-3 
                                w-3/4 
                                bg-[#595635] 
                                text-white 
                                py-1.5 
                                rounded-lg 
                                font-medium 
                                text-xs 
                                text-center 
                                inline-block
                                hover:bg-[#4a482b] 
                                transition
                            "
                >
                    View 
                </a>
            </div>
        </div>
    );
}

export default BooksCards;
