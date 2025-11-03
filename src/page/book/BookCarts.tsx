import type { DataLink } from "@/data/Link";

function BookCarts({ target }: { target: DataLink }) {
  return (
    <div
      className="
        group
        bg-white
        rounded-2xl
        shadow-md
        overflow-hidden
        w-full
        sm:w-44
        md:w-52
        lg:w-56
        transition
        transform
        hover:-translate-y-2
        hover:shadow-xl
        cursor-pointer
        flex
        flex-col
      "
    >
      {/* Clickable Image Section */}
      <div className="relative w-full h-56 sm:h-60 md:h-64 overflow-hidden">
        <a href={target.src} target="_blank" rel="noopener noreferrer">
          <img
            src={target.image}
            alt={target.name || "Book cover"}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        </a>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Book details */}
      <div className="p-3 text-center flex flex-col items-center">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate w-full">
          {target.name}
        </h3>

        {/* Button */}
        <a
          href={target.src}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-3
            px-4
            py-2
            bg-[#595635]
            text-white
            text-xs sm:text-sm
            rounded-lg
            hover:bg-[#4a482b]
            transition
          "
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default BookCarts;
