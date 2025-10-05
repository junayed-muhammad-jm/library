import type { typeWriter } from "@/data/writer.data";

function Writer({ writer }: { writer: typeWriter }) {
  return (<div
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
    <div className="relative w-full h-72 overflow-hidden">
      <a
        href={writer.src}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={writer.image}
          alt={writer.name}
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

      {/* Dark overlay (hover effect only) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>



    {/* Content */}
    <div className="flex flex-col items-center justify-between p-4 flex-1">

      <h3 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
        {writer.name}
      </h3>


    </div>
  </div>);
}

export default Writer;