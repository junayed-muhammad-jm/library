import type { ImagesData } from "@/data/data";
import { Link } from "react-router";

function BooksCards({ product }: { product: ImagesData }) {
    return (
        <div
            className="
        group
        bg-white 
        rounded-2xl 
        shadow-md 
        overflow-hidden 
        hover:shadow-2xl 
        transition-all 
        duration-500 
        ease-out
        transform 
        hover:-translate-y-2
        flex 
        flex-col
        relative
      "
        >
            {/* Image Section */}
            <div className="relative w-full h-80 overflow-hidden">
                <Link to={product.src}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="
              w-full 
              h-full 
              object-cover 
              transition-transform 
              duration-700 
              group-hover:scale-110
            "
                    />
                </Link>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Book Title Overlay */}
                <div className="absolute bottom-0 w-full px-4 py-3 text-white bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-base sm:text-lg font-semibold truncate">
                        {product.name}
                    </h3>
                </div>

                {/* Corner Tag */}
                <div className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    New
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center text-center px-5 py-4 flex-1">
                <p className="text-gray-600 text-sm mb-1 line-clamp-1 italic">
                    {product.writer}
                </p>

                <div className="flex items-center justify-between gap-3 mt-2 w-full">
                    <span className="text-[#595635] font-semibold text-sm">
                        ⭐ 4.8/5
                    </span>
                    <Link
                        to={product.src}
                        className="
              bg-[#595635] 
              text-white 
              py-1.5 
              px-4 
              rounded-lg 
              text-xs 
              font-medium 
              hover:bg-[#4a482b] 
              transition-colors 
              duration-300
            "
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BooksCards;
