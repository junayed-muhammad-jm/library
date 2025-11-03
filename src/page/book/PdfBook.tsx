import LinkData from "@/data/Link";
import BookCarts from "@/page/book/BookCarts";

function PdfBook() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 lg:px-12">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#595635] mb-10">
        📚 PDF BOOKS LIBRARY
      </h2>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {LinkData.map((target) => (
          <BookCarts key={target.id} target={target} />
        ))}
      </div>
    </div>
  );
}

export default PdfBook;
